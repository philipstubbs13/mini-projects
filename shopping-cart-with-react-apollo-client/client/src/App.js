import './App.css';
import { Grid } from '@chakra-ui/react';
import Cart from './Cart';
import StoreItem from './StoreItem';

const StoreItems = [
  {
    name: "Cooper Codes Channel",
    description: "Buy the Cooper Codes!",
    price: 10,
    id: 1
  },
  {
    name: "Shoes",
    description: "Cool casual shoes",
    price: 50,
    id: 2
  },
  {
    name: "Bitcoin",
    description: "Buy some cyprotcurrency!",
    price: 5,
    id: 3
  },
  {
    name: "JavaScript",
    description: "Buy the JS source code!",
    price: 15,
    id: 4
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my store!</h1>
        <Cart />
        <br></br>
        <h2>Store Items</h2>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          {StoreItems.map((item) => (
            <StoreItem item={item} />
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
