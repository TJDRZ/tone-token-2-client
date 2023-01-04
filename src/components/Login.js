import "../styles/Login.css";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  registerUser,
  loginUser,
  getUser,
} from "../utility/backendAPIs/authAPI";
import About from "./About";

function Login() {
  const author = useRef(null);
  const title = useRef(null);
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("tone-token-user");
    if (user !== null) {
      const fetchUserData = async () => {
        const data = await getUser(user);
        if (data._id) {
          navigate("/menu");
        }
      };
      fetchUserData();
    }
  }, []);

  const toggleLogin = () => {
    setNewUser(!newUser);
    setEmail("");
    setPassword("");
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const res = newUser
      ? await registerUser(email, password)
      : await loginUser(email, password);
    if (res.token) {
      navigate("/menu");
    } else alert(res.error);
  };

  return (
    <main className="Login">
      <header className="header">
        <About author={author} title={title} />
        <div>
          <h2 ref={author} className="author">
            TJDRZ's
          </h2>
          <h1 ref={title} className="title">
            Tone Token
          </h1>
        </div>
        <div
          className="ToneLock"
          onClick={() => alert("https://github.com/TJDRZ")}
        >
          <div className="outer-lock">
            <div className="inner-lock"></div>
          </div>
        </div>
      </header>
      <section>
        <form className="Card" onSubmit={(e) => submitForm(e)}>
          <button
            className="toggle-login"
            type="button"
            onClick={toggleLogin}
          >
            {newUser
              ? "Returning User? - Sign-In"
              : "New User? - Create Account"}
          </button>
          <h1>{newUser ? "Create Account:" : "Sign-In:"}</h1>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
