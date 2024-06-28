import React from "react";
import { Link } from "react-router-dom";
import TrainIcon from '@mui/icons-material/Train';


const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <TrainIcon sx={{ color: "white", fontSize: 50 }} />
        <Link to={"/"}>
          {" "}
          <h3>Chiptalar</h3>
        </Link>
      </div>
      <div className="a-links">
        <div className="logo-txt">
          <Link to={"/"}>Asosiy </Link>
        </div>

        <div className="logo-txt">
          <Link to={"/bronqilish"}>Bron qilish</Link>
        </div>
        <div className="logo-txt">
          <Link to={"/biz-haqimizda"}>Biz haqimizda </Link>
        </div>
        <div className="logo-txt">
          <Link to={"/boglanish"} sx={{ width: "181px" }}>
            Bog'lanish
          </Link>{" "}
        </div>
        <div className="call__center">
          <Link to={"/ruyhatdan-otish"} sx={{ width: "181px" }}>
            Ruyhatdan o'tish
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
