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

    componentDidMount () {
        const queryParams = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        // from burger builder the first param is the name and the second param is the value. + converts value to a number.
        for(let param of queryParams.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinue={this.checkoutContinuedHandler}
                />
            </div>
        );
    }
}

export default Checkout;