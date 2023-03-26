import ListFood from "../pages/ListFood"
import Login from "../pages/Login"

const publicRoutes = [
    { path: "/", component: Login, layoutType: "default" },
    { path: "/listfood", component: ListFood, layoutType: "default" },
]
const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }