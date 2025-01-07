"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const LayoutWrapper = ({ children }) => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="flex h-screen overflow-y-auto">
        <Sidebar />
        {children}
      </div>
    </Provider>
  );
};
export default LayoutWrapper;
