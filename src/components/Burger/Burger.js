import React from 'react'
import { withRouter } from "react-router-dom";

import BurgerIngridient from './BurgerIngridient/BurgerIngredient';

import classes from './Burger.css';

const burger = (props) => {
    
    let transformedIngredinets = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngridient key={igKey + i} type={igKey}/>
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if(transformedIngredinets.length === 0){
        transformedIngredinets = <p>Please start adding ingredients!</p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformedIngredinets}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);