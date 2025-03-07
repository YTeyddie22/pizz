// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiResturant";
import {
    calcMinutesLeft,
    formatCurrency,
    formatDate,
} from "../../utils/helper";

/*
DUMMY DATA

const order = {
    id: "ABCDEF",
    customer: "Teddy",
    phone: "123456789",
    address: "Kiamunyi, Nakuru , Kenua",
    priority: true,
    estimatedDelivery: "2027-04-25T10:00:00",
    cart: [
        {
            pizzaId: 7,
            name: "Napoli",
            quantity: 3,
            unitPrice: 16,
            totalPrice: 48,
        },
        {
            pizzaId: 5,
            name: "Diavola",
            quantity: 2,
            unitPrice: 16,
            totalPrice: 32,
        },
        {
            pizzaId: 3,
            name: "Romana",
            quantity: 1,
            unitPrice: 15,
            totalPrice: 15,
        },
    ],
    position: "-9.000,38.000",
    orderPrice: 95,
    priorityPrice: 19,
};

*/

function Order() {
    //Fetch the data from the API using useLoaderData hook from react router

    const order = useLoaderData();
    // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
    const {
        id,
        status,
        priority,
        priorityPrice,
        orderPrice,
        estimatedDelivery,
        cart,
    } = order;
    const deliveryIn = calcMinutesLeft(estimatedDelivery);

    return (
        <div>
            <div>
                <h2>Status</h2>

                <div>
                    {priority && <span>Priority</span>}:
                    <span> {status} order</span>
                </div>
            </div>

            <div>
                <p>
                    {deliveryIn >= 0
                        ? `Only ${calcMinutesLeft(
                              estimatedDelivery
                          )} minutes left 😃`
                        : "Order should have arrived"}
                </p>
                <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
            </div>

            <div>
                <p>Price pizza: {formatCurrency(orderPrice)}</p>
                {priority && (
                    <p>Price priority: {formatCurrency(priorityPrice)}</p>
                )}
                <p>
                    To pay on delivery:{" "}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
}

//Load the order from resturant API
export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}

export default Order;
