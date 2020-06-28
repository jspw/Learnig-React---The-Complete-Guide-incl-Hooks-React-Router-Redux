import React from 'react';
import cssClasses from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let TransformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + 1} type={igKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if(TransformedIngredients.length === 0){
        TransformedIngredients = <p>Please Add some shits!</p>
    }

    return (
        <div className={cssClasses.Burger}>
            <BurgerIngredient type="bread-top" />
            {
                TransformedIngredients
            }
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}


export default burger;