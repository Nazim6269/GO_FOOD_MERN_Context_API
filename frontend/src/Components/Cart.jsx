import React from "react";
import { removeFromCart } from "../context/actions/actionCreators";
import { useCart, useDispatchCart } from "../context/context";

const Cart = () => {
  const { cart } = useCart();
  const dispatch = useDispatchCart();

  if (cart?.length === 0) {
    return (
      <div>
        <div className="m-5 w-100 text-center fs-3 text-white">
          The cart is Empty
        </div>
      </div>
    );
  }

  const totalPrice = cart?.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className="container m-auto mt-5 table-responsive">
        <table className="table table-hover">
          <thead className="text-success fs-4">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Option</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((food, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{food.name}</td>
                <td>{food.quantity}</td>
                <td>{food.size}</td>
                <td>{food.price}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(removeFromCart(index));
                    }}
                    className="btn p-0"
                  >
                    Remove from cart
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className="text-white">Total Price: {totalPrice}</h1>
        </div>
        <div>
          <button className="btn bg-success mt-5">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
