import { createBrowserRouter } from "found";
import RootPage from "./pages/RootPage/RootPage";

const routeConfig = [
  {
    path: "/",
    Component: () => <RootPage />,
  },
];

const BrowserRouter = createBrowserRouter({ routeConfig });

const App = () => {
  return <BrowserRouter />;
};
export default App;
