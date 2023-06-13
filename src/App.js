import './App.css';
import SecondMain from './components/SecondMain';

function App() {
  const foods = [{
    id: 1,
    name :"Banku",
    img : "./Images/banku1.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 2,
    name :"Fried-rice",
    img : "./Images/friedrice1.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 3,
    name :"Banku",
    img : "./Images/banku2.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 4,
    name :"Pizza",
    img : "./Images/piz1.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 5,
    name :"Fried-rice",
    img : "./Images/friedrice2.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 6,
    name :"Salad",
    img : "./Images/salad1.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 7,
    name :"Salad",
    img : "./Images/salad2.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 8,
    name :"Waakye",
    img : "./Images/waakye1.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 9,
    name :"Banku",
    img : "./Images/banku3.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 10,
    name :"Pizza",
    img : "./Images/piz2.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 11,
    name :"Waakye",
    img : "./Images/waakye2.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 12,
    name :"Spagetti",
    img : "./Images/spag1.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 13,
    name :"pizza",
    img : "./Images/piz3.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 14,
    name :"Fried-Rice",
    img : "./Images/friedrice3.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 15,
    name :"Banku",
    img : "./Images/banku4.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 16,
    name :"Spagetti",
    img : "./Images/spag2.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 17,
    name :"Waakye",
    img : "./Images/waakye3.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 18,
    name :"Waakye",
    img : "./Images/waakye4.jpg",
    other : "Sweet taste, you are all invited",
  },
  {
    id: 19,
    name :"Spagetti",
    img : "./Images/spag3.jpg",
    other : "Sweet taste, you are all invited",
  }
]



  return (
    <div className="App">
      <h1>Dishes Rolodex</h1>
      <SecondMain item={foods} />
     
    </div>
  );
}

export default App;
