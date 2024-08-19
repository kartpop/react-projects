import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../lib/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import upload from "../../lib/upload";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [accountCreationInProgress, setAccountCreationInProgress] =
    useState(false);

  const [loginInProgress, setLoginInProgress] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setAvatar({ file, url });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginInProgress(true);

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully.");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoginInProgress(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setAccountCreationInProgress(true);

    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    // VALIDATE INPUTS
    if (!username || !email || !password)
      return toast.warn("Please enter inputs!");
    if (!avatar.file) return toast.warn("Please upload an avatar!");

    // VALIDATE UNIQUE USERNAME
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return toast.warn("Select another username");
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        username,
        email,
        avatar: imgUrl,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("Account created successfully. You can login now.");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setAccountCreationInProgress(false);
    }
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={accountCreationInProgress || loginInProgress}>
            {loginInProgress ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" placeholder="Username" name="username" />
          <input type="text" placeholder="Email" name="email" />
          <input type="password" placeholder="Password" name="password" />
          <button disabled={accountCreationInProgress || loginInProgress}>
            {accountCreationInProgress ? "Creating account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
