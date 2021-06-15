import React, { useEffect } from "react";
import { getgallery } from "../services/actions/gallery";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button, Card, CardDeck, Container, CardGroup ,Row,Col} from "react-bootstrap";

// import {getgallery} from "../"
const ImageShow = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gallery.GALLERY.data);
  const getImage = (e) => {
    e.preventDefault();
    dispatch(getgallery());
  };
  return (
    <div >
    <div className="text-center">
   <Button className="my-auto" type="submit" variant="warning" onClick={getImage}>
    Show Images
   </Button>
   </div>
  
    <Row xs={1} md={3} className="g-4 mt-5">

      {state && state.length > 0
        ? state.map((image, idx) => {
            return (
              <Col>
              <Card >
                <Card.Img
                  variant="top"
                  src={process.env.REACT_APP_API_URL + "/uploads/" + image.name}
                  height={150}
                  width={150}
                />
                <Card.Body>
                  <Card.Title>Name:{image.name}</Card.Title>
                  <Card.Text>Height:{image.height}</Card.Text>
                  <Card.Text>Width:{image.width}</Card.Text>
                  <Card.Text>Extension:{image.extension}</Card.Text>
                  <Card.Text>Size:{image.size}</Card.Text>
                </Card.Body>
                <Card.Footer>
                <Button
                  variant="primary"
                  onClick={() =>
                    history.push({
                      pathname: "/imagelocation",
                      state: {
                        lat: image.location.coordinates[1],
                        long: image.location.coordinates[0],
                      },
                    })
                  }
                >
                  Show on Map
                </Button>
                </Card.Footer>
              </Card>
              </Col>
            );
          })
        : ""}
        </Row>
    </div>
  );
};

export default ImageShow;
