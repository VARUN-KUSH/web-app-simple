import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

//const [Name, setName] = useState(second)
//const [email, setName] = useState(second)

//const [Name, setName] = useState(second)

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    console.log("clicked");
    dispatch(login({ password, username }));

    navigate("/welcome");
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="space-y-5">
          <div>
            <label for="name">Name: </label>
            <input id="name" type="text" />
          </div>

          <div>
            <label>Email:</label>
            <input type="text" />
          </div>

          <div>
            <label>Phone:</label>
            <input type="text" />
          </div>

          <div>
            <label>Usern: </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label>Pass:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button onClick={handleClick} className="bg-[red] px-4 py-2 rounded-md ">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
