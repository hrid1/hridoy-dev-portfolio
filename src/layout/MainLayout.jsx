import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <div className="relative h-full overflow-y-auto antialiased">
        <div className="fixed inset-0 bg-fix bg-cover bg-center bg-img h-full"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Navbar />
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
