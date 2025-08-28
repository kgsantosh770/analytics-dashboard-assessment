import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router";
import App from "@/App.tsx";
import Dashboard from "@/pages/dashboard";
import About from "@/pages/about";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="/about" element={<About />} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}
