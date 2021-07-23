import Header from './components/Header';
import BookingSelector from './components/BookingSelector';
import FeaturedProperty from './components/FeaturedProperty';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BookingSelector/>
      <FeaturedProperty/>
    </div>
  );
}

export default App;
