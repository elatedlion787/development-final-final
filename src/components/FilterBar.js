import Aggregator from "./Aggregator"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function FilterBar({selectDietFilterType, selectFilterType, sorting}){
    return(
    <Nav>
        <Container>
          <h4> Filter for Your Desired Food!</h4>
          <Row>
          <h5> Choose Dietary Restriction: </h5>
                <Col sm={4}>
                  <form>
                    <select name="selectList" onChange={selectDietFilterType}> 
                      <option value="all"> None </option>
                      <option value="v_friendly"> Vegetarian Friendly </option>
                      <option value="non_v_friendly"> Non-Vegetarian Friendly</option>
                    </select>
                  </form>
                </Col>
          </Row>
          <Row>
          <h5> Choose Type of Food: </h5>
                <Col sm={4}>
                  <form>
                    <select name="selectList" onChange={selectFilterType}> 
                      <option value="all"> All </option>
                      <option value="Curry"> Curry </option>
                      <option value="Noodle"> Noodle</option>
                      <option value="Soup"> Soup</option>
                    </select>
                  </form>
                </Col>
          </Row>
          <Row>
            <h5> Choose Property to Sort By: </h5>
            <Col sm={4}>
                <form>
                    <Nav.Item> <input type='radio' name='sort' id="price" value='price-lh' onChange={sorting} />
                    <label for="sort"> Price High-Low</label> </Nav.Item>

                    <Nav.Item> <input type='radio' name='sort' id="price" value='price-hl' onChange={sorting}/>
                    <label for="sort"> Price Low-High</label> </Nav.Item>
                </form>
            </Col>
          </Row>
          <Row>
          <br>
          </br>
          </Row>
          
        </Container>
        </Nav>
    );
}