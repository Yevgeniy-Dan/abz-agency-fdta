import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./sass/app.scss";
import { UsersContextProvider } from "./store/users-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersContextProvider>
    <App />
  </UsersContextProvider>
);
