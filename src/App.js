import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import MainComponent from "./components/MainComponent";

import Body from "./components/Body";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import SearchedPage from "./components/SearchedPage";
import ChannelInfo from "./components/ChannelInfo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainComponent />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "searchedPage",
        element: <SearchedPage />,
      },
      {
        path: "channelDetails",
        element: <ChannelInfo />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
