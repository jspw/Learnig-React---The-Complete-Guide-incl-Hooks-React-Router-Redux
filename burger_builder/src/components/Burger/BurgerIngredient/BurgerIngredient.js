import React, { Component } from 'react';
import cssClasses from './BurgerIngredient.module.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {

    render() {

        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={cssClasses.BreadBottom}>
                </div>;
                break;

            case ('bread-top'):
                ingredient = <div className={cssClasses.BreadTop}>
                    <div className={cssClasses.Seeds1}>
                    </div>
                    <div className={cssClasses.Seeds2}>
                    </div>
                </div>;
                break;

            case ('meat'):
                ingredient = <div className={cssClasses.Meat}>
                </div>;
                break;

            case ('cheese'):
                ingredient = <div className={cssClasses.Cheese}>
                </div>;
                break;

            case ('bacon'):
                ingredient = <div className={cssClasses.Bacon}>
                </div>;
                break;

            case ('salad'):
                ingredient = <div className={cssClasses.Salad}>
                </div>;
                break;

            default:
                ingredient = null;
        }

        return (
            ingredient
        );
    };
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
}

export default BurgerIngredient;