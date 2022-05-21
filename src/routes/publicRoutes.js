import Blogs from "../pages/Blogs/Blogs";
import Home from "../pages/Home.js/Home";
import Login from "../pages/Login/Login";
import MyPortfolio from "../pages/MyPortfolio/MyPortfolio";

export const publicRoute = [
    { path: '/', name: "Home", Component: Home },
    { path: '/blogs', name: "Blogs", Component: Blogs },
    { path: '/portfolio', name: "MyPortfolio", Component: MyPortfolio },
    { path: '/login', name: "Login", Component: Login },
]