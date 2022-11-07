import React from "react";
import "./CardContainer.scss";
import CardItem from "./CardItem";

const allCardsInfo = [
  {
    level: "مبتدئ",
    applyGradient: "blueGradient",
    price: 0,
    para1: "بداية",
    para2: "تعلم كيفية انشاء مشاريعك الاولى",
    btnDark: false,
    tick: false,
  },
  {
    level: "متوسط",
    applyGradient: "purpleGradient",
    price: 7,
    para1: "للمشاريع المخطط لها",
    para2: " للمشاريع المخطط لها للمشاريع المخطط",
    btnDark: true,
    tick: false,
  },
  {
    level: "متقدم",
    applyGradient: "orangeGradient",
    price: 12,
    para1: "للمهنيين",
    para2: "استمتع بالاستخدام غير المحدود ",
    btnDark: false,
    tick: true,
  },
];
const CardContainer = () => {
  return (
    <div className="card__container">
      {allCardsInfo.map((singleCard) => {
        return <CardItem objProp={singleCard} key={singleCard.level} />;
      })}
    </div>
  );
};

export default CardContainer;
