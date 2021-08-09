import React from "react";
import "./item-description.scss";

const ItemDescription = ({ title, authors, categories, image }: Book) => {
  return (
    <div className="item-description-wrapper">
      <section className="item-description">
        <img
          src={image}
          alt="Missing Image"
          className="item-desciption__image"
        />
        <div className="item-description-info">
          <span className="item-description-info__title">{title}</span>
          <span className="item-description-info__authors">{authors}</span>
          <span className="item-description-info__categories">
            {categories}
          </span>
        </div>
      </section>
    </div>
  );
};

export default ItemDescription;
