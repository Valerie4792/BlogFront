import { Button, Container, Form, Modal, Row, Accordion, Col, ListGroup} from "react-bootstrap";

import React from "react";
import { useState } from "react";

const Dashboard = () => {
  //function to set state
  const handleSetTitle = (e) =>setBlogTitle(e.target.value)
  const handleBlogDescription = (e) =>setBlogDescription(e.target.value)
  const handleTag= (e) =>setBlogTags(e.target.value)
  const handleCategory = (e) =>setBlogCategory(e.target.value)
  const handleImage = (e) =>setBlogImage(e.target.value)
  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true)
    if(e.target.textContent === 'Add Blog Item'){
      setEdit(false);
      setBlogTitle("");
      setBlogDescription("");
      setBlogCategory("");
    }
    else{
      setEdit(true);
      setBlogTitle("MyAwesomeTitle");
      setBlogDescription("DESCRIPTION");
      setBlogCategory("Travel");
    }
  };

//create use states for forms
const [blogTitle, setBlogTitle] = useState("");
const [blogImage, setBlogImage] = useState("");
const [blogDescription, setBlogDescription] = useState("");
const [blogCategory, setBlogCategory] = useState("");
const [blogTags, setBlogTags] = useState("");
const [blogItems, setBlogItems] = useState([
  {
    Id: 1,
    Title: "Top Finishing and Crossing Drills",
    Publisher: "anonymous",
    Date: "01-13-2022",
    Text: "Developing finishing and crossing skills is an important aspect of soccer that can greatly constribute to your player.",
    Image: 
          "./assets/Images/3soccerballs.jpg",
    Published: true
    
  },
  {
    Id: 2,
    Title: "6 Soccer Drills to Work on Defense",
    Publisher: "anonymous",
    Date: "01-14-2022",
    Text: "A strong defense is the backbone of any successful soccer team",
    Image: 
          "./assets/Images/3soccerballs.jpg",
    Published: true
  },
  {
    Id: 3,
    Title: "5 Small Side Games",
    Publisher: "anonymous",
    Date: "01-15-2022",
    Text: "Small-sided games create a fast-paced and intense environment.",
    Image: 
          "./assets/Images/3soccerballs.jpg",
    Published: true
  },
  {
    Id: 4,
    Title: "5 Fun 1 V 1 Youth Soccer Activites",
    Publisher: "anonymous",
    Date: "01-15-2022",
    Text: "One of the best ways to naturally bring out the competitive nature.",
    Image: 
          "./assets/Images/3soccerballs.jpg",
    Published: false
  },
  {
    Id: 5,
    Title: "5 Fun warm up soccer drills",
    Publisher: "anonymous",
    Date: "01-15-2022",
    Text: "One of the challenges for youth soccer coaches is to make sure their players are always excited to come to practice.",
    Image: 
          "./assets/Images/3soccerballs.jpg",
    Published: false
  },
]);

//bools
const [show, setShow] = useState(false);
const [edit, setEdit] = useState(false);
  return (
    <>
      <Container>
        <Button className="me-3" variant="primary" onClick={handleShow}>
          Add Blog Item
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header style={{ background: "#1c0101" }} closeButton>
            <Modal.Title style={{ background: "#1c0101" }}>
              {edit ? 'Edit' : 'Add'} Blog Item
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "#1c0101" }}>
            <Form>
              <Form.Group className="mb-3" controlId="Title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Title" value={blogTitle} onChange={handleSetTitle}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter Description" value={blogDescription} onChange={handleBlogDescription}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Category">
                <Form.Select aria-label="Default select example" value={blogCategory} onChange={handleCategory}>
                  <option>Select Category</option>
                  <option value="Food">Food</option>
                  <option value="Music">Music</option>
                  <option value="Travel">Travel</option>
                  <option value="Tech">Tech</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="Tags">
                <Form.Label>Tags</Form.Label>
                <Form.Control type="text" placeholder="Enter Tags" value={blogTags} onChange={handleTag}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="Image">
                <Form.Label>Pick an Image</Form.Label>
                <Form.Control type="file" placeholder="Select Image from file" accept="image/png, image/jpg" value={blogImage} onChange={handleImage}/>
              </Form.Group>

             
            </Form>
          </Modal.Body>
          <Modal.Footer style={{ background: "#1c0101" }}>
            <Button variant="outline-secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="outline-primary" onClick={handleClose}>
            {edit ? 'Save Changes' : 'Save'}
            </Button>
            <Button variant="outline-primary" onClick={handleClose}>
              {edit ? 'Save Changes' : 'Save'} Save and Publish
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="outline-primary" onClick={handleShow}>Edit Blog Item</Button>
        <Row>
          <Col>
          <Accordion defaultActiveKey={['0','1']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Published</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "#3f3f3f", color:"azure"}}>
       {blogItems.map((item) => item.Published ? <ListGroup key={item.Title}>{item.Title}  
       <Col className="d-flex justify-content-end">
       <Button variant="outline-danger mx-2">
        Delete
        </Button>
        <Button variant="outline-info mx-2">Edit</Button>
        <Button variant="outline-primary mx-2">Publish</Button>
        </Col></ListGroup>: null)}
      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Unpublished</Accordion.Header>
        <Accordion.Body style={{backgroundColor: "#3f3f3f", color:"azure"}}>
        {blogItems.map((item) => !item.Published ? <ListGroup key={item.Title}>{item.Title}
        <Col className="d-flex justify-content-end">
       <Button variant="outline-danger mx-2">
        Delete
        </Button>
        <Button variant="outline-info mx-2">Edit</Button>
        <Button variant="outline-primary mx-2">Publish</Button>
        </Col></ListGroup> : null)}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

          </Col>
        </Row>
      </Container>
      
    </>
  );
};

export default Dashboard;
