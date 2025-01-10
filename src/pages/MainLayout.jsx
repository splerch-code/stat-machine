import { Outlet } from "react-router-dom";
import Header from "../components/main/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-20">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
