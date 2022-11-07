import React from "react";
import "./CardItem.scss";

const CardItem = (props) => {
  const { objProp } = props;
  const { level, applyGradient, price, para1, para2, btnDark, tick } = objProp;
  return (
    <div className="card__item">
      <div className={`card__item--title ${applyGradient}`}>
        <h2>{level}</h2>
      </div>
      <div className="card__item--pricing">
        <div>
          <h1>${price}/شهر</h1>
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      </div>
      <div className="card__item--btn-ul">
        <button className={btnDark ? "btn-dark" : "btn-outline"}>
          اشتراك
        </button>
        <ul>
          <li>{tick ? "✔️" : "✔️"} 1</li>
          <li>{tick ? "✔️" : "✔️"} 2</li>
          <li>{tick ? "✔️" : "❌"} 3</li>
          <li>{tick ? "✔️" : "❌"} 4</li>
          <li>{tick ? "✔️" : "❌"} 5</li>
          <li>{tick ? "✔️" : "✔️"} 6</li>
          <li>{tick ? "✔️" : "❌"} 7</li>
        </ul>
      </div>
    </div>
  );
};

export default CardItem;
