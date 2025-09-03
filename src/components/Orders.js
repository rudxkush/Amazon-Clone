import React from 'react';
import './Orders.css';
import { useStateValue } from '../StateProvider';

function Orders() {
    const [{ user }] = useStateValue();

    return (
        <div className="orders">
            <div className="orders__header">
                <h1>Your Orders</h1>
            </div>
            
            <div className="orders__content">
                <div className="orders__filters">
                    <select className="orders__timeFilter">
                        <option>Orders placed in last 30 days</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                    </select>
                </div>

                <div className="orders__list">
                    <div className="orders__empty">
                        <img src="https://m.media-amazon.com/images/G/01/x-locale/cs/ya/images/empty-orders._CB485927719_.png" alt="No orders" />
                        <h2>No orders yet</h2>
                        <p>Looks like you haven't placed an order in the last 30 days.</p>
                        <button className="orders__shopButton">Start shopping</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;