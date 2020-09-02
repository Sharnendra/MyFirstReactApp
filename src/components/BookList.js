import React,{Component} from 'react';
import {Jumbotron, Card, Table, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

class BookList extends Component{
    
  constructor(props){
    super(props);
    this.state ={
      books : []
    };
  }

  componentDidMount=()=>{
    axios.get("http://localhost:8080/getBookList")
    .then(response => response.data.data.bookList)
    .then((bookList)=>this.setState({books: bookList}))
  }

    render=()=>{
        return <Jumbotron className="bg-dark text-white">
        <h1>Available List of Books at our Book Shop</h1>
        <Card className="border border-dark bg-dark text-white center">
          <Card.Header><FontAwesomeIcon icon={faList} /> Book List</Card.Header>
          <Card.Body>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Book Id</th>
                <th>Author</th>
                <th>Book Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.books.length === 0 ?
                <tr align="center">
                  <td colSpan="6">No Data Available</td>
                </tr>
                :
                this.state.books.map((book)=>(
                  <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.author}</td>
                    <td>{book.bookName}</td>
                    <td>{book.price}</td>
                    <td>
                      <ButtonGroup>
                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit} /></Button>{''}
                        <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash} /></Button>{''}
                      </ButtonGroup>
                    </td>
                </tr>
                ))
              }
            </tbody>
          </Table>
          </Card.Body>
        </Card>
      </Jumbotron>
    }
}

export default BookList;