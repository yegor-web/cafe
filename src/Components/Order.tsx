import React from 'react';
import img from "..//Assets/image/img.png"

export const Order: (props: { setShowOrder: any }) => JSX.Element = (props) => {
  const { setShowOrder } = props;
  return (
    <div className="order">
      <div className="order__body">
        <div className="order__body__cart">
          <div className="order__body__cart__header">
            <h3>Корзина</h3>
            <button className="button" onClick={() => setShowOrder(false)}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24.7487" cy="24.7488" r="17.5" transform="rotate(135 24.7487 24.7488)" fill="#FD9058" />
                <path d="M17.5051 30.1814L22.9378 24.7488L17.5051 19.3161L19.316 17.5052L24.7487 22.9379L30.1813 17.5052L31.9922 19.3161L26.5596 24.7488L31.9922 30.1814L30.1813 31.9923L24.7487 26.5597L19.316 31.9923L17.5051 30.1814Z" fill="white" />
              </svg>
            </button>
          </div>
          <div className="order__body__cart__body">
            <div className="order__body__cart__body__item">
              <div className="order__body__cart__body__item__header">
                <h5>Заказ на 20 января</h5>
              </div>
              <div className="order__body__cart__body__item__body">
                <div className="order__body__cart__body__item__body__item">
                  <div className="order__body__cart__body__item__body__item__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="order__body__cart__body__item__body__item__info">
                    <h4>Ntcn</h4>
                    <p>Блинчики с сыром, салатом, помидором, огурцом, курицей, соусом</p>
                    <span>Общий вес: 2.3 кг</span>
                  </div>
                  <div className="order__body__cart__body__item__body__item__price">
                    <h4>200 р.</h4>
                    <div className="order__body__cart__body__item__body__item__price__count">
                      <input type="number" value="1" />
                      <button>-</button>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order__body__cart__body__item__body">
                <div className="order__body__cart__body__item__body__item">
                  <div className="order__body__cart__body__item__body__item__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="order__body__cart__body__item__body__item__info">
                    <h4>Ntcn</h4>
                    <p>Блинчики с сыром, салатом, помидором, огурцом, курицей, соусом</p>
                    <span>Общий вес: 2.3 кг</span>
                  </div>
                  <div className="order__body__cart__body__item__body__item__price">
                    <h4>200 р.</h4>
                    <div className="order__body__cart__body__item__body__item__price__count">
                      <input type="number" value="1" />
                      <button>-</button>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order__body__cart__body__item">
              <div className="order__body__cart__body__item__header">
                <h5>Заказ на 22 января</h5>
              </div>
              <div className="order__body__cart__body__item__body">
                <div className="order__body__cart__body__item__body__item">
                  <div className="order__body__cart__body__item__body__item__img">
                    <img src={img} alt="" />
                  </div>
                  <div className="order__body__cart__body__item__body__item__info">
                    <h4>Ntcn</h4>
                    <p>Блинчики с сыром, салатом, помидором, огурцом, курицей, соусом</p>
                    <span>Общий вес: 2.3 кг</span>
                  </div>
                  <div className="order__body__cart__body__item__body__item__price">
                    <h4>200 р.</h4>
                    <div className="order__body__cart__body__item__body__item__price__count">
                      <input type="number" value="1" />
                      <button>-</button>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order__body__info">
          <div className="order__body__info__data-delivery">
            <button>Перейти к оформлению</button>
          </div>
          <div className="order__body__info__data-days">
            <h4>Оплата сразу</h4>
          </div>
          <div className="order__body__info__data-user">
          </div>
        </div>
      </div>
    </div>
  )
}
