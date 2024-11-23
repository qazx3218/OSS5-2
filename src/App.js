import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CrudPage from "./components/Pages/ItemListPage";
import DetailPage from "./components/Pages/DetailPage";
import UpdatePage from "./components/Pages/UpdatePage";
import CreatePage from "./components/Pages/CreateNewPage";
import Navbar from "./components/Common/NavigationBar";

const App = () => {
    return (
        <Router>
            <Navbar />
            <main className="app-content">
                <Routes>
                    <Route path="/" element={<Navigate to="/list" replace />} />
                    <Route path="/list" element={<CrudPage />} />
                    <Route path="/detail/:id" element={<DetailPage />} />
                    <Route path="/update/:id" element={<UpdatePage />} />
                    <Route path="/create" element={<CreatePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </main>
        </Router>
    );
};

const NotFoundPage = () => (
    <div className="not-found">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <a href="/list" className="btn btn-primary">Go Back to List</a>
    </div>
);

export default App;
