import '../App.css';
import CheckoutButton from '../checkoutButton';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
              <h1>Welcome to our store!</h1>
              <CheckoutButton />
      </header>
    </div>
  );
}

export default Home;