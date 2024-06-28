import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

const Boglanish = () => {
  return (
    <div className="author-info">
      <div className="top-info">
        <CallIcon sx={{ color: "white", fontSize: 40 }} />

        <span style={{ fontSize: "33px", color: "white" }}>
          +998 93 927 12 20
        </span>
      </div>
      <div className="social__icons">
        <TelegramIcon sx={{ color: "white", fontSize: 60 }} />
        <InstagramIcon sx={{ color: "white", fontSize: 60 }} />
        <WhatsAppIcon sx={{ color: "white", fontSize: 60 }} />
      </div>
      <br />
      <br />
      <div className="bottom-info">
        {/* <div className="left-info">
          <p data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
            Tuzuvchi:
          </p>
        </div> */}
        {/* <div className="right-info">
          <span>
            Muhammedov.M <br /> - Namangan muhandislik- qurilish institutining
            Axborot tizimlari va texnologiyalari kafedrasining talabasi.
          </span>
        </div> */}
      </div>
      <br />
      {/* <div className="bottom-info">
        <div className="left-info">
          <p data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000">
            Taqrizchi:{" "}
          </p>
        </div>
        <div className="right-info">
          <span>
            R.Soliyev - Namangan muhandislik- qurilish instituti Energetika va
            mehnat muhofazasi fakulteti dekani, texnika fanlar doktori.
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Boglanish;
