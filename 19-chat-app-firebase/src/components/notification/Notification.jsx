import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./notification.css";

const Notification = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Notification;
