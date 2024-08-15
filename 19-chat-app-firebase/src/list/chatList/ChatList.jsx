import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <div className="chatList">
        <div className="search">
          <div className="searchBar">
            <img src="./search.png" alt="search" />
            <input type="text" placeholder="Search" />
          </div>
          <img src="./plus.png" alt="plus" className="add" />
        </div>
      </div>
    </div>
  );
};

export default ChatList;
