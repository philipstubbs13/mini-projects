import Navbar from './components/Navbar';
import Booklist from './components/BookList';
import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
