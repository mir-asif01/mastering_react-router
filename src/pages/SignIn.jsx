import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const handleForm = (e) => {
    e.preventDefault();
    if (email === "asif@gmail.com" && password === "123456") {
      const user = {
        name: "mir kamrul ahsan asif",
        email: email,
        country: "bangladesh",
      };
      navigate("/profile", { state: user });
    } else {
      alert("Email-Password Incorrect");
    }
  };

  return (
    <>
      <section>
        <form onSubmit={handleForm}>
          <h1 className="text-center text-4xl mb-4">SignIn</h1>
          <div className="flex flex-col justify-center items-center gap-7">
            <input
              onChange={(e) => handleEmail(e)}
              className="p-1 border outline-none"
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) => handlePassword(e)}
              className="p-1 border outline-none"
              type="password"
              placeholder="Password"
            />
            <input
              className="bg-indigo-500 px-6 py-2 cursor-pointer text-white"
              type="submit"
              value={"SignIn"}
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default SignIn;
