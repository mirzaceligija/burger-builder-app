import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    //This could be a functional component
    /*
    // Unsafe method currently
    componentWillUpdate(){
        console.log("OrderSummary update")
    }
    */


    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform:"capitalize"}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>
                );
            });
        return (
        <Aux>
            <h3>Your order:</h3>
            <p> A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>TOTAL PRICE: ${this.props.price}</strong></p>
            <p> Continue to Checkout?</p>
            <Button buttonType="Danger" clicked={this.props.purchaseCancel}> CANCEL </Button>
            <Button buttonType="Success" clicked={this.props.purchaseContinue}> CONTINUE </Button>
        </Aux>  
        );
    }
}

export default OrderSummary;