import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import MarketItem from "../../components/MarketItem/MarketItem";
import { getMarketItems } from "../../api/marketItems";
import MarketItemEdit from "../../components/MarketItemEdit/MarketItemEdit";
import "./index.css";

const Index = () => {
  const [marketItems, setMarketItems] = useState();
  useEffect(() => {
    getMarketItems(setMarketItems);
  }, []);

  const [modalShown, setModalShown] = useState(false);
  const [modalItem, setModalItem] = useState();
  useEffect(() => {
    setModalItem(null);
  }, [marketItems]);

  const handleSave = (item) => {
    const items = [...marketItems];
    if (item.id === "new")
      items.push({
        title: item.title,
        price: item.price,
        image: item.image,
      });
    else items[item.id] = item;

    setMarketItems(items);
    setModalShown(false);
  };

  console.log(modalItem);
  return !marketItems ? (
    "Loading.."
  ) : (
    <Container className="mt-5">
      <Row className="row-cols-4">
        {marketItems.map((item, key) => (
          <Col key={key} className="py-3">
            <MarketItem
              data={item}
              handleEdit={() => {
                setModalItem({ id: key, ...item });
                setModalShown(true);
              }}
              handleDelete={() =>
                setMarketItems(marketItems.filter((i, k) => key !== k))
              }
            />
          </Col>
        ))}
        <Col className="py-3">
          <Card className="h-100" onClick={() => setModalShown(true)}>
            <Card.Body className="new-item m-2 d-flex">
              <div className="align-self-center w-100 text-center text-white">
                {"+ Créer une nouvelle offre"}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <MarketItemEdit
        show={modalShown}
        handleShow={(show) => setModalShown(show)}
        item={modalItem}
        handleSave={(item) => handleSave(item)}
      />
    </Container>
  );
};

export default Index;
