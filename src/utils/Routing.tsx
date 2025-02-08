import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import App from "../App";

export default function Routing() {
    return (
        <Router>
            <div>
                <nav className="bg-primary text-2xl justify-center space-x-2">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about">
                        <App />
                    </Route>
                    <Route path="/users">
                        <App />
                    </Route>
                    <Route path="/">
                        <App />
                    </Route>
                </Routes>
            </div>
        </Router>
    )
}