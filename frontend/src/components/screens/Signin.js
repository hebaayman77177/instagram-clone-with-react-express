import { useState } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";
import { Link } from "react-router-dom";
import Classes from "./Signin.module.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const postData = () => {
    const data = { email, password };

    fetch("/api/v1/auth/log-in", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "error") {
          console.log("error:", data);
          M.toast({ html: data.message, classes: "#e53935 red darken-1" });
        } else {
          console.log("Success:", data);
          localStorage.setItem("jwt",data.token);
          localStorage.setItem("user",data.data.user);
          M.toast({ html: "Success", classes: "#388e3c green darken-2" });
          history.push("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="card-auth">
      <div className="card card_eqv input-field">
        <h3>Instagram</h3>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <a
          className="waves-effect waves-light btn #01579b light-blue darken-4"
          onClick={postData}
        >
          Login
        </a>
        <Link className={Classes.text_link} to="/signup">Don't have account?</Link>
      </div>
    </div>
  );
}

export default Signin;
