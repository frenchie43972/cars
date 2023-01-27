import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';
import { formReducer } from '../store/slices/formSlice';

function CarList() {
  const dispatch = useDispatch();

  const {cars, name} = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filiteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return {
      cars: filiteredCars,
      name: form.name
    };
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });  

  return (
    <div className='car-list'>
      {renderedCars}
      <hr />
    </div>
  );
}

export default CarList;