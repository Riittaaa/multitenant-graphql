import { useMutation } from "@apollo/client";
import { LOGIN } from "../../GraphQL/Mutations";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { data, loading, error }] = useMutation(LOGIN);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        variables: {
          input: {
            email,
            password,
          },
        },
      });

      console.log('Response:', response);
      // console.log(response.data.loginUser.user.id);

      if (response?.data?.loginUser?.errors?.length > 0) {
        console.log("Errors:", response.data.loginUser.errors);
      } else if (response?.data?.loginUser?.message) {
        console.log("Message:", response.data.loginUser.message);
        navigate("/profile",{
          state: { userId: response.data.loginUser.user.id },
        })
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="email"
          placeholder="Enter the email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter the password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p>Error: {error.message}</p>}
        {data && data.loginUser.errors && (
          <p>Errors: {data.loginUser.errors.join(", ")}</p>
        )}
        {data && data.loginUser.message && <p>{data.loginUser.message}</p>}
      </form>
    </div>
  );
}

export default Login;
