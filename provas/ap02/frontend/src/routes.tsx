import { Navigate, Route, Routes } from "react-router-dom";
import { Create } from "./pages/Create";
import { Show } from "./pages/Show";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/mostrar" />} />
      <Route path="mostrar" element={<Show />} />
      <Route path="cadastro" element={<Create />} />
    </Routes>
  );
}
