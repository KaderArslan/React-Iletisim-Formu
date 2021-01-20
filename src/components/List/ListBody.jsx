import React from "react";
import { Accordion, Card, ListGroup, Button } from "react-bootstrap";


function ListBody(props) {
  return (
    <div className="pb-5">
      {props.datas.map((data, index) => {
        return (
          <Accordion key={index}
            className="bg-dark text-dark"
            defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Show records : {data.name} {data.surname}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ListGroup>
                    <ListGroup.Item>
                      <Button type="submit" className="btn-danger"
                        onClick={() => props.deleteList(index)}>
                          Delete
                        </Button>
                        <Button className="btn-info"
                        onClick={() => props.editList({
                          id : index,
                          name : data.name,
                          surname : data.surname,
                          email : data.email,
                          message : data.message
                        }
                        )}>
                          Edit
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item>Name   : {data.name}</ListGroup.Item>
                    <ListGroup.Item>Surname: {data.surname}</ListGroup.Item>
                    <ListGroup.Item>Email  : {data.email}</ListGroup.Item>
                    <ListGroup.Item>Message: {data.message}</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}
    </div>
  );
}

export default ListBody;
