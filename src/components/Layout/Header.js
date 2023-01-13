import React, { Fragment } from "react";

import mealsImage from '../../assets/meals1.jpeg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {

  return <Fragment>
    <header className={classes.header}>
      <h1>Bap-cho Meals</h1>
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
    <div className={classes['main-image']}>
      <img src={mealsImage} alt='A table full of delicious food!' />
    </div>
  </Fragment>
}