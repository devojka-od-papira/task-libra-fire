import React from "react";
import Button from "../button";
import location from "../../assets/location.png";
import clock from "../../assets/clock.png";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";

const VisitShowroom = () => {
  const showrooms = [
    {
      title: "Deurne (Antwerpen)",
      street: "Oude Bosuilbaan 43, 2100 Deurne",
      phone: "03/326 75 70",
      email: "verkoop@vanwauwe.com",
      workingHour: [
        {
          workingDays: "Maandag - Vrijdag",
          workingTime: "van 7u tot 8u",
          contact: "Op afspraak via nummer 03 360 79 99",
        },
        {
          workingDays: "Maandag - Vrijdag",
          workingTime: "Van 8u tot 17u",
          contact: "",
        },
        {
          workingDays: "Woensdag - Donderdag & Vrijdag",
          workingTime: "van 17u tot 18u op ",
          contact: "Op afspraak via nummer 03 360 79 99",
        },
      ],
    },
    {
      title: "Lubbeek (Leuven)",
      street: "Staatsbaan 4E, 3210 Lubbeek",
      phone: "016/62 09 01",
      email: "verkoop@vanwauwe.com",
      workingHour: [
        {
          workingDays: "Maandag - Vrijdag",
          workingTime: "an 7u tot 8u",
          contact: "Op afspraak via nummer 016/62 09 01",
        },
        {
          workingDays: "Maandag - Vrijdag",
          workingTime: "van 8u tot 17u",
          contact: "",
        },
        {
          workingDays: "Woensdag - Donderdag & Vrijdag",
          workingTime: "van 17u tot 18u op  ",
          contact: "Op afspraak via nummer 016/62 09 01",
        },
      ],
    },
    {
      title: "Kontich",
      street: "Prins Boudewijnlaan 17 - unit 1, 2550 Kontich",
      phone: "016/62 09 01",
      email: "verkoop@vanwauwe.com",
      workingHour: [
        {
          workingDays: "Maandag - Vrijdag",
          workingTime: "van 8u tot 12u30 ",
          contact: "van 13u tot 16u",
        },
        {
          workingDays: "Zaterdag en zondag",
          workingTime: "gesloten",
          contact: "",
        },
      ],
    },
  ];

  return (
    <div className="showrooms">
      <div className="container">
        <div className="title">
          <h2 className="h2 color-black">Tevreden klanten vertellen</h2>
        </div>
        <div className="showrooms-wrapper">
          {showrooms.map((showroom) => {
            return (
              <div className="showroom">
                <h4 className="h4">{showroom.title}</h4>
                <p className="p3 main-p">
                  <img src={location} alt="" />
                  {showroom.street}
                </p>
                <p className="p3 main-p">
                  <img src={phone} alt="" />
                  {showroom.phone}
                </p>
                <p className="p3 main-p">
                  <img src={mail} alt="" />
                  {showroom.email}
                </p>
                {showroom.workingHour.length
                  ? showroom.workingHour.map((item, index) => {
                      if (index === 0) {
                        return (
                          <React.Fragment>
                            <p className="p4 main-p">
                              <img src={clock} alt="" />
                              {item.workingDays}
                            </p>
                            <p className="p3 indented">{item.workingTime}</p>
                            <p className="p3 indented">{item.contact}</p>
                          </React.Fragment>
                        );
                      }

                      return (
                        <div className="spaced">
                          <p className="p4 indented">{item.workingDays}</p>
                          <p className="p3 indented">{item.workingTime}</p>
                          <p className="p3 indented">{item.contact}</p>
                        </div>
                      );
                    })
                  : null}
              </div>
            );
          })}
        </div>
        <div className="showroom-buttons">
          <Button className="bg-blue color-white " text="Onze showrooms" />
        </div>
      </div>
    </div>
  );
};

export default VisitShowroom;
