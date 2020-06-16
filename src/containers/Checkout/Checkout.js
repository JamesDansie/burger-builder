import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/Checkout/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            bacon: 1,
            cheese: 2
        }
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} />
            </div>
        );
    }
}

export default Checkout;