import React from 'react';
import ViewBasket from './ViewBasket';

function OrderConfirmation(props) {

    return (
        <div className="ViewBasketContainer">
            <h2 className="viewBasketTitle">Order Confirmation</h2>
            <div style={{height: '100px', width: '100px'}}>
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            </div>
            <h4>Order Number: {props.order.order_id}</h4>
            <ViewBasket
                basket={props.confirmedBasket}
                screenWidth={props.screenWidth}
                changeIndex={props.changeIndex.bind(this)}
                complete={true}
            ></ViewBasket>
            <h4>Delivery Address</h4>
            <div>{`${props.userProfile.user_first_name} ${props.userProfile.user_last_name}`}</div>
            <div>{props.deliveryAddress.address1}</div>
            <div>{props.deliveryAddress.address2}</div>
            <div>{props.deliveryAddress.address3}</div>
            <div>{props.deliveryAddress.post_code}</div>
            
        </div>
    )
}

export default OrderConfirmation;