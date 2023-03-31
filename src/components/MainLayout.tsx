import { Layout } from "antd";
import React from "react";
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Notice from "../pages/Notice";

const MainLayout = () => {

    const routes = [
        {path: '/notice', element: <Notice />}
    ]

    return (<Layout>
        <p>isLogin  = true</p>
        <Router>
            <Routes>
                <Route path="/"></Route>
                {routes.map((route, index) => <Route path={route.path} element={route.element} key={route.path} />)}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    </Layout>)
}

export default MainLayout