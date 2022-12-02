import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <div>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, image, description } = curElem;

          return (
            <div className="card-container" key={id}>
              <div className="card-body" >
                <span className="card-number card-circle subtle">
                  {" "}
                  {curElem.id}{" "}
                </span>
                <span className="card-author subtle"> {category} </span>
                <h2 className="card-title">{name} </h2>
                <span className="card-description subtle">{description}</span>
                <div className="card-read">READ</div>
                <div>
                  <img src={image} alt="" className="card-media" />
                  <span className="card-tag subtle">Order now</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default MenuCard;
