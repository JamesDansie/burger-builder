import React, { Component } from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    // so what is this doing?
    // first getting the keys from the ingredients object
    // then mapping it to an array
    // spreading that array and making entries equal to
    // the value for the key.
    // then mapping the ingredient/key that many times.
    // so bacon: 2 becomes [bacon, bacon]
    // it then flattens the array with reduce, so instead
    // of an array of arrays, it's just an array.
    // god js is ugly
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            })
        })
        .reduce((arr, ele) => {
            return arr.concat(ele)
        }, []);
    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add some ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;