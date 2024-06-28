import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cybernetwork from "../assets/imgs/cyber__network.png";
import block from "../assets/imgs/security-safe.png";
import admin from "../assets/imgs/user-tick.svg";
import global from "../assets/imgs/global.png";
import key from "../assets/imgs/key.svg";
import calendar from "../assets/imgs/calendar.png";

const Darsliklar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const flights = [
    {
      img: global,
      from: "Namangan",
      to: "Istanbul",
      date: "31.08.2024",
      time: "00:00",
    },
    {
      img: global,
      from: "Tashkent",
      to: "Moskva",
      date: "30.08.2024",
      time: "23:00",
    },
    {
      img: global,
      from: "Andijan",
      to: "Kazakstan",
      date: "29.08.2024",
      time: "22:00",
    },
    {
      img: global,
      from: "Namangan",
      to: "Istanbul",
      date: "1.09.2024",
      time: "01:00",
    },
    {
      img: global,
      from: "Fergana",
      to: "Moskva",
      date: "2.09.2024",
      time: "17:00",
    },
    {
      img: global,
      from: "Samarqand",
      to: "Istanbul",
      date: "03.09.2024",
      time: "14:00",
    },
  ];

  return (
    <div className="main-txt-page">
      {flights.map((flight, index) => (
        <div
          className="security__card"
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 100}
          data-aos-duration="1000"
        >
          <img src={flight.img} alt="" />
          <p>
            {flight.from} -> {flight.to}
          </p>
          <span>
            <p>
              Parvoz vaqti:{" "}
              <span style={{ color: "crimson" }}>{flight.date}</span>
            </p>
            <p>Soat {flight.time}</p>
            <button className="bron__btn">Bron qilish</button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Darsliklar;
