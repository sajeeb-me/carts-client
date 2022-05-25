import PageLoading from "../components/PageLoading";
import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home.js/Home";
import Login from "../pages/Login/Login";
import ResetPassword from "../pages/Login/ResetPassword";
import Signup from "../pages/Login/Signup";
import MyPortfolio from "../pages/MyPortfolio/MyPortfolio";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

export const publicRoute = [
    { path: '/', name: "Home", Component: Home },
    { path: '/blogs', name: "Blogs", Component: Blogs },
    { path: '/portfolio', name: "MyPortfolio", Component: MyPortfolio },
    { path: '/login', name: "Login", Component: Login },
    { path: '/signup', name: "Signup", Component: Signup },
    { path: '/resetpassword', name: "ResetPassword", Component: ResetPassword },
    { path: '/loading', name: "PageLoading", Component: PageLoading },
    { path: '*', name: "NotFoundPage", Component: NotFoundPage },
]