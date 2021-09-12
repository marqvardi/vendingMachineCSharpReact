import React from "react";
import { Grid } from "semantic-ui-react";
import CustomCard from "../card/card.component";

const MainDisplay = ({ products, handleSelection }) => {
  return (
    <div>
      <Grid>
        <Grid.Row columns={3}>
          {products &&
            products.map((product) => (
              <div key={product.id} onClick={() => handleSelection(product)}>
                <CustomCard product={product} />
              </div>
            ))}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default MainDisplay;
