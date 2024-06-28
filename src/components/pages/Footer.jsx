import React from "react";
import TrainIcon from "@mui/icons-material/Train";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="logo">
          <TrainIcon sx={{ color: "white", fontSize: 50 }} />
          <Link to={"/"}>
            {" "}
            <h3>Chiptalar</h3>
          </Link>
        </div>
        <p className="author">Muallif: Jobirxon</p>
        <p>Namangan muhandislik qurilish instituti</p>
      </div>
      <div className="footer-bottom">
        {/* <p>2024</p> */}
        <h5>
          <a
            href="https://t.me/alikhanov13"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* ALIKHANOV tamonidan yaratilgan{" "} */}
          </a>
        </h5>{" "}
      </div>
    </footer>
  );
};

export default Footer;
