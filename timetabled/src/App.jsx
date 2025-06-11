import './App.css';
import Calendar from './components/Calendar';

const App = (props) => {

  return (
    <div className="App">
      <h1>Itinerary for 7 days in Chicago🏢</h1>
      <h2>Welcome to Chicago, garbal! Check out this calendar to get to know this city and see all the sights during your stay</h2>
      <Calendar />
    </div>
  )
}

export default App