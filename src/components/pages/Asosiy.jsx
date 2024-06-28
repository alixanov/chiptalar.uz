import React, { useEffect } from "react";
import AOS from "aos";
import vokzal from "../../components/assets/imgs/вокзал.png";
import familiy from "../assets/imgs/familiy.jpg"
import kassa from "../assets/imgs/kassa.png"

const Asosiy = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="main-container">
      <div className="main-page">
        <div className="left">
          <div
            data-aos-delay="50"
            className="title-aos"
            data-aos="fade-down-right"
            data-aos-duration="1000"
          >
            <b>Assalomu aleykum!</b>
          </div>
          <div
            className="title-aos"
            data-aos="fade-down-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {/* <b>Xush kelibsiz!</b> */}
          </div>

          <br />
          <span
            data-aos="fade-right"
            data-aos-delay="150"
            data-aos-duration="1000"
          >
            Hush kelibsiz!
          </span>
          <p
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            {/* rasmiy veb-saytiga . */}
          </p>
          <br />
          <p
            data-aos="fade-right"
            data-aos-delay="250"
            data-aos-duration="1000"
          >
            Bizning onlayn chiptalar sotish platformamiz orqali
            sayohatlaringizni rejalashtirish endi yanada qulay va oson.
          </p>
          <p
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            Foydalanuvchilarga xizmat ko'rsatishning yangi darajasi bilan siz
            istalgan vaqtda va joyda transport chiptalarini xarid qilish
            imkoniyatiga ega bo'lasiz.
          </p>
        </div>

        <div
          className="right"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
        >
          <img src={vokzal} alt="" />
        </div>
      </div>

      <div className="main-title">
        <p data-aos="zoom-in" data-aos-duration="500">
          Biz professional xizmatlarni taklif qilamiz.{" "}
        </p>
      </div>
      <div className="tisket__card">
        <div className="tisket__right">
          <img src={kassa} alt="" />
        </div>
        <div className="tisket__left">
          <p> Nima uchun bizni tanlaysiz?</p>
          <span>
            Tez va qulay: Transport chiptalarini atigi bir necha bosqichda xarid
            qiling. Sizga kerakli yo'nalishni tanlashdan boshlab, to'lovni
            amalga oshirishgacha bo'lgan barcha jarayonlar soddalashgan va
            tezkor. <br /> Ishonchli va xavfsiz: Ma'lumotlaringizni himoya
            qilish uchun zamonaviy texnologiyalardan foydalanamiz. Shaxsiy va
            moliyaviy ma'lumotlaringizning xavfsizligini ta'minlash bizning
            ustuvor vazifamizdir.
            <br /> Har doim siz bilan: 24/7 xizmat ko'rsatish va mijozlarga
            qulay interfeys. Saytimizdan foydalanish har qanday qurilmada,
            kompyuter yoki mobil telefoningiz orqali amalga oshirilishi mumkin.
            <br />
            Keng transport tarmog'i: Bizning platformamiz orqali turli xil
            transport vositalari, jumladan, avtobuslar, poezdlar va samolyotlar
            uchun chiptalarni topishingiz mumkin.
          </span>
          {/* <button></button> */}
        </div>
      </div>
      <div className="tisket__card">
        <div className="tisket__left">
          <p> Qanday ishlaydi?</p>
          <span>
            Yo'nalishni tanlang: Qayerga va qachon sayohat qilishni xohlaysiz?
            O'zingizga mos keladigan sanalarni tanlang va qidiruvni boshlang.{" "}
            <br /> Chiptalarni qidiring: Bizning keng transport tarmog'imizdan
            o'zingizga mosini toping. Foydalanuvchilarga qulay qidiruv tizimimiz
            orqali kerakli chiptani osongina topasiz. <br /> Xarid qiling:
            Onlayn to'lov tizimlarimiz orqali xavfsiz va tez to'lovni amalga
            oshiring. Turli xil to'lov usullari bilan chiptalarni xarid qilish
            oson va xavfsiz. <br /> Sayohatdan zavqlaning: Elektron chiptangizni
            o'zingiz bilan olib, sayohatdan rohatlaning! <br /> Elektron
            chiptalarimizni printerdan chiqarishingiz yoki mobil qurilmangizda
            saqlab qo'yishingiz mumkin.
          </span>
          <button> Harid qilish</button>
        </div>
        <div className="tisket__right">
          <img src={familiy} alt="" />
        </div>
      </div>

      <hr id="line" />
    </div>
  );
};

export default Asosiy;
