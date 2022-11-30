import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import ThaiItem from "./components/ThaiItem";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavItem } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Aggregator from './components/Aggregator';
import FilterBar from './components/FilterBar'
/*
Create our list of data to display on the website using an array of objects
*/
const ThaiFood = [
  {id: 0, name: "Pad Thai", price: 10.99, type: "Noodle", v_friendly: true, image: 'images/download.jpg'},
  {id: 1, name: "Tom Yum", price: 15.99, type: "Soup", v_friendly: false, image: 'images/download-1.jpg'},
  {id: 2, name: "Duck Tamarind Curry", price: 30.00, type: "Curry",v_friendly: false,image: 'images/download-2.jpg'},
  {id: 3, name: "Chicken Garlic Noodle Soup", type: "Soup", price: 15.79, v_friendly: false,image: 'images/download-3.jpg'},
  {id: 4, name: "Red Curry", price: 13.99, type: "Curry", v_friendly: true, image: 'images/download-4.jpg'},
  {id:5, name: "Green Curry", price: 20.50, type: "Curry", v_friendly: true, image: 'images/download-5.jpg'},
  {id: 6, name: "Panang Curry", price: 15.00, type: "Curry", v_friendly: false, image: 'images/download-6.jpg'},
  {id: 7, name: "Massaman Curry", price: 20.99, type: "Curry",v_friendly: false, image: 'images/download-14.jpg'},
  {id: 8, name: "Pineapple Fried Rice", price: 16.79, type: "Noodle",v_friendly: true,image: 'images/download-7.jpg'},
  {id: 9, name: "Pad See Ew", price: 17.49, type: "Noodle", v_friendly: true,image: 'images/download-8.jpg'},
  {id: 10, name: "Pad Kee Mao", price: 19.00, type: "Noodle", v_friendly: true, image: 'images/download-9.jpg'},
  {id: 11, name: "Crispy Chicken Pad Woon Sen", type: "Noodle", price: 12.00, v_friendly: false, image: 'images/download-10.jpg'},
  {id: 12, name: "Tom Kha Gai", type:"Soup", price: 9.99, v_friendly: true, image: 'images', image:'images/download-15.jpg'}
]





function App() {



  // define a cart with length of our ThaiFood array
  const [cart, setCart] = useState(Array(ThaiFood.length).fill(0));
  
  // aggregator to keep track of all the items in the cart. 
  const [cartTotal, setCartTotal] = useState(0.00);
  const [type, setType] = useState("all")
  const [foodData, setFoodData] = useState([...ThaiFood]);
  const [diet, setDiet] = useState("all")
  const [sort, setSort] = useState(null);

  
  const sorting = (e) => {
    let sortingMethod = e.target.value;
    console.log("sortingMethod", sortingMethod)
    setSort(sortingMethod)
    sort_func()
  }

  function sort_func(){
    let sort_res
    if (sort === "price-lh"){
      console.log("low-hi")
      sort_res = foodData.sort(function(a, b){return a.price - b.price})
      setFoodData(sort_res)
    } else{
      console.log("hi-lo")
      sort_res = foodData.sort(function(a, b){return b.price - a.price})
      setFoodData(sort_res)
    }
  }


  function incrementCart(index, price){
      cart[index] = cart[index] + 1 || 1;
      setCart({...cart});
      const tot_price = cartTotal + price
      console.log(tot_price)
      setCartTotal(tot_price);
  }

  function decrementCart(index, price){
    if(cart[index] > 0){
      cart[index] = cart[index] - 1
      setCart({...cart})
      const tot_price = cartTotal - price 
      setCartTotal(tot_price)
    }
  }

  function clearCart(){
      setCart(Array(ThaiFood.length).fill(0));
      setCartTotal(0);
  }

  const selectFilterType = (e) => {
    let newFilter = e.target.value;
    console.log("filter:", newFilter)
    setType(newFilter)
  }

  const selectDietFilterType = (e) => {
    let newDietFilter = e.target.value;
    console.log("diet_filter", newDietFilter)
    setDiet(newDietFilter)
  }

  const matchDietFilterType = item => {
    if(diet === "all"){
      return true
    } else if (diet === "v_friendly"){
        console.log("Not match")
        return item.v_friendly
    } else if (diet === "non_v_friendly"){
        return !(item.v_friendly)
    }
  }

  const matchTypeFilter = item => {
    if(type == "all"){
      return true
    } else{
      return type === item.type
    }
  }

  
  return (
    <div className="App">
      <div className="header">
      <h1> ElatedLion787's Thai Resturant</h1>
      </div>
      <div>
      
      <FilterBar selectDietFilterType={selectDietFilterType} selectFilterType={selectFilterType} sorting={sorting}/>
      <Aggregator tf={ThaiFood} cart={cart} cartTotal={cartTotal} onClick={clearCart}/>
      
      <div className="wrapper">
        {foodData.map((item, index) => ( // TODO: map bakeryData to   
          matchDietFilterType(item) &&
          matchTypeFilter(item) &&
          <ThaiItem item={item} index={index} onClickAdd={incrementCart} onClickRemove={decrementCart} cart={cart}/>
        ))}
      </div>
      </div> 
    </div>
  );
}

export default App;
