import React, { Component } from 'react';

import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    // if we get rid of WillUpdate then we
    // can change back to a functional component
    componentWillUpdate() {
        console.log('[OrderSummary] Willupdate');
    }

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>);
        });

        return (
            <Aux>
                <h3>Your Order</h3>
                <p>A tasty burger with these ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
            </Aux>
        );
    }
};

export default OrderSummary;