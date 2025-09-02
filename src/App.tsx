import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Everything common across all pages can go here, e.g. Navbar/Footer */}
      <Outlet />
    </div>
  );
}
