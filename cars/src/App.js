import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarForm from './components/CarForm';
import CarValue from './components/CarValue';

function App() {
  return (
    <div>
      <CarForm />
      <CarList />
      <CarSearch />
      <CarValue />
    </div>
  );
}

export default App;