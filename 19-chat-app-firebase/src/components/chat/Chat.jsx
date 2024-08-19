import { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { db } from "../../lib/firebase";
import {
  arrayUnion,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { useChatStore } from "../../lib/chatStore";
import { useUserStore } from "../../lib/userStore";

const Chat = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState(null);

  const scrollBottom = useRef(null);

  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();

  useEffect(() => {
    scrollBottom.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => unSub();
  }, [chatId]);

  const handleEmojiSelected = (e) => {
    setMessage((prev) => prev + e.emoji);
    setOpenEmojiPicker(false);
  };

  const handleSend = async () => {
    if (!message) return;

    // update chats collection
    try {
      await updateDoc(doc(db, "chats", chatId), {
        messages: arrayUnion({
          senderId: currentUser.id,
          text: message,
          createdAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.log(error);
    }

    // update userchats collection for each user
    const userIDs = [currentUser.id, user.id];

    userIDs.forEach(async (id) => {
      const userChatsRef = doc(db, "userchats", id);
      const userChatsSnap = await getDoc(userChatsRef);

      if (userChatsSnap.exists()) {
        const userChatsData = userChatsSnap.data();

        const chatIndex = userChatsData.chats.findIndex(
          (c) => c.chatId === chatId
        );

        userChatsData.chats[chatIndex].lastMessage = message;
        userChatsData.chats[chatIndex].updatedAt = new Date().toISOString();
        userChatsData.chats[chatIndex].isSeen = id === currentUser.id;

        await updateDoc(userChatsRef, {
          chats: userChatsData.chats,
        });
      }
    });
  };

  console.log(chat);

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>{user.username}</span>
            <p>status message</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        {chat?.messages?.map((message) => (
          <div className="message own" key={message?.createdAt}>
            <div className="texts">
              {message.img && <img src={message.img} alt="" />}
              <p>{message.text}</p>
              {/* <span>1 min ago</span> */}
            </div>
          </div>
        ))}

        <div ref={scrollBottom}></div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpenEmojiPicker((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker
              open={openEmojiPicker}
              onEmojiClick={handleEmojiSelected}
            />
          </div>
        </div>
        <button className="sendButton" onClick={handleSend}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
