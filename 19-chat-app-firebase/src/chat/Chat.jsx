import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./chat.css";

const Chat = () => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmojiSelected = (e) => {
    setMessage((prev) => prev + e.emoji);
    setOpenEmojiPicker(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Some description about Jane Doe</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Hello! How are you doing? I hope you are having a great day. I am
              just checking in to see how you are doing.
              Blah Blah Blah...
              Just want to write some long text to see how it looks.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
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
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
