import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

function MyModal() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const shoeSelected = useSelector((state) => state.shoeSelected.content);
  return (
    <div>
      {shoeSelected(
        <>
          <Modal show={show} onHide={handleClose} animation={false}>
            <h1> {shoeSelected.Name}</h1>
            <img className="" src={shoeSelected.Img} alt="book cover" />
            <Button
              variant="primary"
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: shoeSelected });
              }}
            >
              ADD TO CART
            </Button>
            <Modal.Body>
              Woohoo, you are reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </div>
  );
}

export default MyModal;
