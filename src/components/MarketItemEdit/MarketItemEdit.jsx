import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const MarketItemEdit = ({ show, handleShow, item, handleSave }) => {
  const [state, setState] = useState({
    id: "new",
    title: "",
    price: "",
    image: "",
  });
  useEffect(
    () =>
      setState(
        item ?? {
          id: "new",
          title: "",
          price: "",
          image: "",
        }
      ),
    [item]
  );
  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{`${item ? "Ajouter" : "Modifier"} Item`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>{"Titre"}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer titre"
                value={state.title}
                onChange={(e) => setState({ ...state, title: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{"Price"}</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer prix"
                value={state.price}
                onChange={(e) => setState({ ...state, price: e.target.value })}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>{"Image"}</Form.Label>
              <Form.File
                className="text-muted"
                onChange={(e) => setState({ ...state, image: e.target.value })}
              />
            </Form.Group>
            <div className="d-flex">
              <Button
                className="ml-auto"
                variant="secondary"
                onClick={() => handleShow(false)}
              >
                {"Annuler"}
              </Button>
              <Button variant="primary" onClick={() => handleSave(state)}>
                {"Enregistrer"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MarketItemEdit;
