import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Item from "./Item";

function ItemList({ items, onRemove, onToggleChecked }) {
  return (
    <Container className="mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ListGroup>
            {items.map((item) => (
              <div key={item.name} className="mb-3">
                <Item
                  itemObj={item}
                  onRemove={() => onRemove(item.id)}
                  onToggleChecked={() => onToggleChecked(item.id)}
                />
              </div>
            ))}
          </ListGroup>
        </div>
      </div>
    </Container>
  );
}

export default ItemList;
