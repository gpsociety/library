import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Gallery} from "../pages/Gallery";
import {NotFound} from "../pages/NotFound";
import { Layout } from "../components/Layout";

export default function AppRouter() {
    return (
        <BrowserRouter basename="/library/">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="gallery" element={<Gallery />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}