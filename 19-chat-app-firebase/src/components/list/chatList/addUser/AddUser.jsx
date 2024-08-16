import "./addUser.css";
import ReactDOM from "react-dom";

const AddUser = () => {
  return ReactDOM.createPortal(
    <div className="addUser">
      <form>
        <input type="text" placeholder="Username" name="username" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Jane Doe</span>
        </div>
        <button>Add User</button>
      </div>
    </div>,
    document.body
  );
};

export default AddUser;
