import React from 'react';
import img from "../Assets/image/img.png"
import { useAppSelector, useAppDispatch } from "..//hooks/redux"

const MiniCard = () => {
  const { bask } = useAppSelector(state => state.basketReducer);
  const dispatch = useAppDispatch();
  return (
    <div className="wiget__add__product__body__item">
      <div className="wiget__add__product__body__item__img">
        <img src={img} alt="" />
      </div>
      <div className="wiget__add__product__body__item__info">
        <h4>{bask.name?.[0]}</h4>
        <p>{bask.description}</p>
      </div>
      <div className="wiget__add__product__body__item__price">
        <button className="button" style={{ width: "35%" }}>+ 200 р.</button>
        <button
          className="button"
          style={{ width: "55%" }}
          // onClick = () => {}
          value='Выбрать'
        ></button>
      </div>
    </div>
  );
};

export default MiniCard;