import React from "react";
import {Container, Row} from "react-bootstrap";

function FetchData() {
  const data = {
    m1: { description: "Chicken Fried Rice", name: "FriedRice", price: 150.00 },
    m2: { description: "Mutton Briyani", name: "Briyani", price: 175.00 },
    m3: { description: "Idly with Vada", name: "Idly", price: 50.00 },
    m4: { description: "Dosai with potato masala ", name: "Dosai", price: 55.00 }
  };
  const datas = Object.values(data);

  return (
    <div>
        <Container className="border w-75 mt-5 p-5">
            <div>
                {datas.map((item, index) => (
                    <div key={index}>
                        <Row className="mx-3">
                            <Row className="name">{item.name}</Row>
                            <Row className="description"> {item.description}</Row>
                            <Row className="price">₹{item.price.toFixed(2)}</Row>
                        </Row>
                        <hr className="mx-3"/>
                    </div>
                ))}
                
            </div>
        </Container>
    </div>
  )
}

export default FetchData;
