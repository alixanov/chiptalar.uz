import React from "react";
import loyiha1 from "../assets/imgs/vokzal__1.jpg";
import loyiha2 from "../assets/imgs/vokzal__2.jpg";
import loyiha3 from "../assets/imgs/vokzal__3.jpg";




const Manbalar = () => {
  return (
    <div className="info-sources">
      <div
        className="title-sources"
        // data-aos="fade-right"
        // data-aos-delay="50"
        // data-aos-duration="1000"
      >
        <img src={loyiha1} alt="" width={400} />
        <br />
        <div className="card__loyiha">
          <p>Joylashuvi: :</p>
          <span>
            Avtovokzal shahar markazida qulay joylashgan bo‘lib, boshqa
            transport turlari, masalan, metro, avtobus va taksilarga oson
            ulanish imkonini beradi. Manzil: Beruniy prospekti, Toshkent,
            O‘zbekiston.
          </span>
        </div>
      </div>
      <br />
      <div
        className="title-sources"
        // data-aos="fade-right"
        // data-aos-delay="50"
        // data-aos-duration="1000"
      >
        <img src={loyiha3} alt="" width={400} />
        <br />
        <div className="card__loyiha">
          <p>Infrastruktura</p>
          <span>
            Zamonaviy avtovokzal binosi yo‘lovchilar uchun qulay kutish zallari,
            chipta kassalari, ovqatlanish joylari va sanitariya uzellari bilan
            jihozlangan. Yo‘lovchilar qulayligi uchun elektron jadval,
            bankomatlar va ma’lumot kiosklari mavjud
          </span>
        </div>
      </div>
      <br />
      <div
        className="title-sources"
        // data-aos="fade-right"
        // data-aos-delay="50"
        // data-aos-duration="1000"
      >
        <img src={loyiha2} alt="" width={400} />
        <br />
        <div className="card__loyiha">
          <p>Yo‘nalishlar va marshrutlar::</p>
          <span>
            Toshkent avtovokzali ichki va xalqaro yo‘nalishlarni xizmat qiladi.
            Ichki yo‘nalishlarga Samarqand, Buxoro, Namangan, Farg‘ona, Andijon
            va boshqa O‘zbekiston shaharlariga qatnovlar kiradi. Xalqaro
            yo‘nalishlar Markaziy Osiyo mamlakatlarini qamrab oladi, jumladan,
            Qozog‘iston, Qirg‘iziston va Tojikiston.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Manbalar;
