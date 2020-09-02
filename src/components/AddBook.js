import React,{Component} from 'react';
import {Jumbotron, Card, Form, InputGroup, FormControl, Button, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class AddBook extends Component{

    constructor(props){
      super(props);
      this.state=this.initialState;
      this.submitBook = this.submitBook.bind(this);
      this.dataChanged = this.dataChanged.bind(this);
    }

    initialState = {
      authorName:'', bookName:'', price:''
    }

    submitBook = event =>{
      event.preventDefault();

      const book ={
        author: this.state.authorName,
        book: this.state.bookName,
        price: this.state.price
      };
      
      axios.post("http://localhost:8080/insertNewBookData",book)
      .then(response => response.data.data.status)
      .then(status => {
        if(status != null && status != "Failure"){
          this.setState(() => this.initialState);
          alert("Book Saved Successfully");
        }
      })
    }

    resetBook = () =>{
      this.setState(() => this.initialState);
    }

    dataChanged = event =>{
      this.setState({
        [event.target.name]:event.target.value
      });
    }

    render=()=>{
        const{authorName, bookName, price}=this.state;

        return <Jumbotron className="bg-dark text-white">
        <h1>Create Entry for New Book</h1>
        <Card className="border border-dark bg-dark text-white center">
          <Card.Header><FontAwesomeIcon icon={faPlusSquare} /> Add Book to your Book Shop</Card.Header>
          <Form id="bookFormId" onSubmit={this.submitBook} onReset={this.resetBook}>
          <Card.Body> 
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control className="bg-dark text-white" required
                  name="authorName" type="test" 
                  value={authorName}
                  onChange={this.dataChanged}
                  placeholder="Enter Author Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridBookName">
                  <Form.Label>Book Name</Form.Label>
                  <Form.Control className="bg-dark text-white" required
                  name="bookName" type="test" 
                  value={bookName}
                  onChange={this.dataChanged}
                  placeholder="Enter Book Name" />
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control className="bg-dark text-white" required
                  name="price" type="test" 
                  value={price}
                  onChange={this.dataChanged}
                  placeholder="Enter Price in Rupees" />
                </Form.Group>
              </Form.Row>
          </Card.Body>
          <Card.Footer style={{"textAlign":"right"}}>
            <Button variant="success" type="submit">
              <FontAwesomeIcon icon={faSave} /> Submit
            </Button>{' '}
            <Button variant="info" type="reset">
              <FontAwesomeIcon icon={faUndo} /> Reset
            </Button>
          </Card.Footer>
          </Form>
        </Card>
      </Jumbotron>
    }
}

export default AddBook;