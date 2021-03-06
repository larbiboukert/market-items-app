import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import "./market-item.css";
import { ReactComponent as EuroIcon } from "../../icons/euro-icon.svg";
import { ReactComponent as OptionsIcon } from "../../icons/options-icon.svg";
import { ReactComponent as EditIcon } from "../../icons/edit-icon.svg";
import { ReactComponent as DeleteIcon } from "../../icons/delete-icon.svg";

const MarketItem = ({ data, handleEdit, handleDelete }) => {
  const { title, price, image } = data;
  return (
    <>
      <Card className="market-item">
        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} />
          <Dropdown.Menu>
            <Dropdown.Item
              className="d-flex align-items-center"
              onClick={handleEdit}
            >
              <EditIcon />
              <span className="pl-2">{"Modifier"}</span>
            </Dropdown.Item>
            <Dropdown.Item
              className="d-flex align-items-center"
              onClick={handleDelete}
            >
              <DeleteIcon />
              <span className="pl-2">{"Supprimer définitivement"}</span>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Card.Img className="market-item__img" variant="top" src={image} />
        <Card.Body className="market-item__text">
          <Card.Text className="market-item__title">{title}</Card.Text>
          <Card.Text className="market-item__price">
            <EuroIcon />
            <span className="pl-1">{price}</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default MarketItem;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <OptionsIcon
    className="market-item__options-icon"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));
