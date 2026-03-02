import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home";
import { CheckIn } from "../pages/CheckIn";
import { List } from "../pages/List";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/lista" element={<List />} />
      </Route>
    </Routes>
  );
}