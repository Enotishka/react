import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ChatPage } from "./pages/ChatPage";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { Error404Page } from "./pages/Error404Page";
import { TemplatePage } from "./pages/TemplatePage";
import { store } from "./store";

export const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<TemplatePage />}>
          <Route index element={<MainPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="chat">
            <Route index element={<ChatPage />} />
            <Route path=":chatId" element={<ChatPage />} />
          </Route>
          <Route path="*" element={<Error404Page />} />
        </Route>
      </Routes>
    </Provider>
  );
};
