import React from 'react';
import './App.css';
import NavigationBar from '../../components/navigation-bar';
import { Container, Row, Col } from 'react-bootstrap';
import JumbotronData from '../../components/jumbotron';
import Footer from '../../components/footer';
import AddBook from '../../components/AddBook';
import BookList from '../../components/BookList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const marginTop = {
    marginTop: "20px"
  }

  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={JumbotronData}/>
              <Route path="/add" exact component={AddBook}/>
              <Route path="/list" exact component={BookList}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;