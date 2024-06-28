import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Asosiy from "./pages/Asosiy";
import Boglanish from "./pages/Boglanish";
import Footer from "./pages/Footer";
import Ruyhatdanotish from "./pages/Ruyhatdan-otish";
import BronQilish from "../components/pages/Bron-qilish"
import BizHaqimizda from "../components/pages/Biz-haqimizda"

const Primary = () => {
  return (
    <div className="primary">
      <Navbar />
      <hr id="hr" />
      <Routes>
        <Route path="/" element={<Asosiy />} />
        <Route path="/bronqilish" element={<BronQilish />} />
        <Route path="/biz-haqimizda" element={<BizHaqimizda />} />
        <Route path="/boglanish" element={<Boglanish />} />
        <Route path="/ruyhatdan-otish" element={<Ruyhatdanotish />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Primary;
