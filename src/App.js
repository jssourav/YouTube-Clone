import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import SearchResults from "./components/SearchResults";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>
  );
}

export default appRouter;

/**
 * Head
 * Body
 *  Sidebar
 *    MenuItems
 *  MainContainer
 *    ButtonsList
 *    VideoContainer
 *       VideoCard
 */
