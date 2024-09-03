import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Login from "./components/auth/Login";
// import GetBlogs from "./components/GetBlogs";
// import Form from "./components/Form";

// const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   // uri: "https://rickandmortyapi.com/graphql",
//   // uri: "https://42d8-110-44-126-21.ngrok-free.app/graphql",
//   uri: "https://localhost:3000/graphql",
//   // uri: "https://6de3-113-199-229-11.ngrok-free.app/graphiql",
// });

const client = new ApolloClient({
  uri: 'http://127.0.0.1:3000/graphql', 
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      {/* <GetBlogs /> */}
      {/* <Form /> */}
    </ApolloProvider>
  </React.StrictMode>
);
