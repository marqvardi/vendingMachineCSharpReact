import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import "./card.style.css";

const CustomCard = ({ product }) => {
  return (
    <div>
      <Card key={product.id} className="productCard">
        <div className="imageSize">
          <Image
            size="small"
            src={`${process.env.PUBLIC_URL}/${product.image}`}
          />
        </div>
        {/* process.env.PUBLIC_URL + "/cola.jpg" */}
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>

          <Card.Description as="h4">
            Price: £ {product.price.toFixed(2)}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <i>
            <Icon name="cart arrow down" />
            Quantity: {product.quantity}
          </i>
          <br />
          <Button
            size="medium"
            content={product.quantity <= 0 ? "SOLD OUT" : "Select"}
            primary
            disabled={product.quantity <= 0}
          />
        </Card.Content>
      </Card>
    </div>
  );
};

export default CustomCard;
