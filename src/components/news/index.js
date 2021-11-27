import React from "react";
import newsOne from "../../assets/news-one.png";
import newsTwo from "../../assets/news-two.png";
import newsThree from "../../assets/news-three.png";
import rightWhiteArrow from "../../assets/right-white-arrow.svg";

const News = () => {
  const news = [
    {
      img: newsThree,
      title: "Opleiding Tridex Deurne",
      description:
        "Op donderdag 18 november konden onze professionele klanten een opleiding volgen…",
    },
    {
      img: newsTwo,
      title: "Vernieuwde showroom Deurne",
      description:
        "Opening van onze vernieuwde showroom in Deurne. En net als wij vonden jullie het - als we de vele…",
    },
    {
      img: newsOne,
      title: "Vernieuwde showroom Lubbeek",
      description:
        "Opening van onze vernieuwde showroom in Lubbeek. En net als wij vonden jullie het - als we…",
    },
  ];
  return (
    <div className="news-container">
      <div className="container">
        <div className="title">
          <h2 className="h2 color-white">Nieuws</h2>
        </div>
        <div className="news-wrapper">
          {news.map((item) => {
            return (
              <div className="news">
                <div className="news-image">
                  <img src={item.img} alt="" />
                </div>
                <div className="content">
                  <h3 className="h3 color-white">{item.title}</h3>
                  <p className="p5 date color-white">
                    <span className="color-black">EVENEMENTEN</span> 21/01/2019
                  </p>
                  <p className="p2 color-light-blue">{item.description}</p>
                  <p className="p1 color-white">
                    Klik hier voor meer informatie{" "}
                    <img src={rightWhiteArrow} alt="" />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
