import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
// @ts-ignore
import Carousel from "react-multi-carousel-18";
import "react-multi-carousel-18/lib/styles.css";
import { useAppSelector, useAppDispatch } from "./hooks/redux"
import img from "./Assets/image/img.png";
import ChangeMenu from './Components/ChangeMenu';
import ChangeDate from './Components/ChangeDate';
import Card from './Components/Card';
import MiniCard from './Components/MiniCard';

export const Header = () => {
    let { pathname } = useLocation();

    return (
        <header>
            <ul className='menu'>
                <li className='menu__item'><Link className={pathname === "/" ? "active" : ''} to="/">Меню</Link></li>
                <li className='menu__item'><Link className={pathname === "/selection" ? "active" : ''} to="/selection">Подбор</Link></li>
                <li className='menu__item'><Link className={pathname === "/about" ? "active" : ''} to="/about">О нас</Link></li>
            </ul>
        </header>
    );
}


export const MenuPage: () => JSX.Element = () => {
    const [showWiget, setShowWiget] = useState(false);
    const [showOrder, setShowOrder] = useState(false);
    const { bask } = useAppSelector(state => state.basketReducer);
    const dispatch = useAppDispatch();
    return (
        <>
            <div className='container'>
                <ChangeMenu />
                <h3>Здоровое питание на каждый день</h3>
                <p style={{ width: '60%', margin: '0 auto 20px' }}>Оптимальное четырехразовое меню на 1 500 ккал/день. Подойдет для тех, кто не занимается спортом, но заботится о своем ежедневном рационе</p>
                <ChangeDate />
                <div className="card__block">
                    <div className="card add">
                        <h3>Добавить напиток</h3>
                        <button onClick={() => {
                            setShowWiget(true)
                        }}>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#FD9058" />
                                <path d="M40.8293 28.9756H28.9756V40.8293H25.0244V28.9756H13.1707V25.0244H25.0244V13.1707H28.9756V25.0244H40.8293V28.9756Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <Card />
                    <div className="card add">
                        <h3>Добавить напиток</h3>
                        <button onClick={() => {
                            setShowWiget(true)
                        }}>
                            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="27" cy="27" r="27" fill="#FD9058" />
                                <path d="M40.8293 28.9756H28.9756V40.8293H25.0244V28.9756H13.1707V25.0244H25.0244V13.1707H28.9756V25.0244H40.8293V28.9756Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="button__block end__block">
                    <button className='button'>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.7046 4.04249L23.7388 4.2H23.9H27.8V5.8H23.9H23.7388L23.7046 5.95751C23.2237 8.16965 21.3018 9.8 19 9.8C16.6982 9.8 14.7763 8.16965 14.2954 5.95751L14.2612 5.8H14.1H0.2V4.2H14.1H14.2612L14.2954 4.04249C14.7763 1.83035 16.6982 0.2 19 0.2C21.3018 0.2 23.2237 1.83035 23.7046 4.04249ZM4.29543 19.9575L4.26119 19.8H4.1H0.2V18.2H4.1H4.26119L4.29543 18.0425C4.77633 15.8304 6.69819 14.2 9 14.2C11.3018 14.2 13.2237 15.8304 13.7046 18.0425L13.7388 18.2H13.9H27.8V19.8H13.9H13.7388L13.7046 19.9575C13.2237 22.1696 11.3018 23.8 9 23.8C6.69819 23.8 4.77633 22.1696 4.29543 19.9575ZM15.8 5C15.8 6.81046 17.1895 8.2 19 8.2C20.8105 8.2 22.2 6.81046 22.2 5C22.2 3.18954 20.8105 1.8 19 1.8C17.1895 1.8 15.8 3.18954 15.8 5ZM12.2 19C12.2 17.1895 10.8105 15.8 9 15.8C7.18954 15.8 5.8 17.1895 5.8 19C5.8 20.8105 7.18954 22.2 9 22.2C10.8105 22.2 12.2 20.8105 12.2 19Z" fill="#FD9058" stroke="white" strokeWidth="0.4" />
                        </svg>
                        Настройка меню
                    </button>
                    <button className='button active' onClick={() => {
                        setShowOrder(true)
                    }}>Хочу это меню</button>
                </div>
            </div>
            {showWiget && <WigetAddProduct setShowWiget={setShowWiget} />}
            {showOrder && <Order setShowOrder={setShowOrder} />}
        </>
    )
}

export const SelectionPage: () => JSX.Element = () => {
    return (
        <div>
            <h1>Подбор</h1>
        </div>
    )
}

export const AboutPage: () => JSX.Element = () => {
    return (
        <div>
            <h1>О нас</h1>
        </div>
    )
}


export const WigetAddProduct: (props: { setShowWiget: any }) => JSX.Element = (props) => {
    const { setShowWiget } = props;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="wiget__add__product">
            <div className="wiget__add__product__content">
                <div className="wiget__add__product__header">
                    <h4>Выбрать завтрак 1 на 20 января</h4>
                    <button className='button' onClick={() => {
                        setShowWiget(false)
                    }}>
                        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24.7487" cy="24.7488" r="17.5" transform="rotate(135 24.7487 24.7488)" fill="#FD9058" />
                            <path d="M17.5051 30.1814L22.9378 24.7488L17.5051 19.3161L19.316 17.5052L24.7487 22.9379L30.1813 17.5052L31.9922 19.3161L26.5596 24.7488L31.9922 30.1814L30.1813 31.9923L24.7487 26.5597L19.316 31.9923L17.5051 30.1814Z" fill="white" />
                        </svg>
                    </button>
                </div>
                <div className="wiget__add__product__body">
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={false}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all 1s ease-in-out"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        deviceType={"desktop"}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
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
