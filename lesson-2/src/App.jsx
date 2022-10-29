import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ChatPage } from "./pages/ChatPage";
import { MainPage } from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { Error404Page } from "./pages/Error404Page";
import { TemplatePage } from "./pages/TemplatePage";
import { persistor, store } from "./store";
import { PrivateRoute } from "./components/PrivateRoute";

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/" element={<TemplatePage />}>
            <Route index element={<MainPage />} />
            <Route
              path="profile"
              element={<PrivateRoute component={<ProfilePage />} />}
            />
            <Route path="chat">
              <Route
                index
                element={<PrivateRoute component={<ChatPage />} />}
              />
              <Route
                path=":chatId"
                element={<PrivateRoute component={<ChatPage />} />}
              />
            </Route>
            <Route path="articles" element={<ArticlesPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </PersistGate>
    </Provider>
  );
};
