import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

const App = () => {
  const user = null;

  let content = null;

  if (user) {
    content = (
      <>
        <List />
        <Chat />
        <Detail />
      </>
    );
  } else {
    content = <Login></Login>;
  }

  return (
    <div className="container">
      {content}
      <Notification />
    </div>
  );
};

export default App;
