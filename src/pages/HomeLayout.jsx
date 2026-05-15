import { Outlet } from "react-router-dom";
import { Footer } from "../components";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <main className="flex-grow w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
