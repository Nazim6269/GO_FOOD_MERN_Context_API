import { useEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCart } from "../context/actions/actionCreators";
import { useCart, useDispatchCart } from "../context/context";

const DisCard = (props) => {
  const { options, desc } = props;
  const priceOpt = Object.keys(options);
  const data = useCart();
  const priceRef = useRef();

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const dispatch = useDispatchCart();
  const handleAddToCart = async () => {
    await dispatch(
      addToCart({
        id: props.foodItem._id,
        name: props.foodItem.name,
        price: finalPrice,
        quantity: quantity,
        size: size,
      })
    );
  };

  const finalPrice = quantity * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={props.foodItem.img}
          style={{ height: "140px", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{props.foodItem.name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <div className="container w-100">
            <select
              className="m-2 h-100  bg-success rounded"
              onChange={(e) => setQuantity(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="m-2 h-100 bg-success rounded"
              onChange={(e) => setSize(e.target.value)}
              ref={priceRef}
            >
              {priceOpt.map((item) => {
                return (
                  <option key={item} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
            <div className="d-inline fs-5">{finalPrice}tk</div>
          </div>
          <hr />
          <Button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisCard;
