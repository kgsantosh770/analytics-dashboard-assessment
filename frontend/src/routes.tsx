import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router";
import App from "@/App.tsx";

export default function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<App />}>
          <Route path="settings" element={<div>Settings</div>} />
        </Route>
      </RouterRoutes>
    </BrowserRouter>
  );
}
