import { useDispatch, useSelector } from 'react-redux';
import { changeName, changeCost, addCar } from '../store';

function CarForm() {
  // Variable using the useDispatch hook to dispatch actions to the store
  const dispatch = useDispatch();

  // The useSelector hook retrieves the the 'name' vlaue in the store
  // folder and passes it down
  const {name, cost} = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost
    };
  });
  
  // An event handler for the input element that dispatches 'changeName'
  // action to the store with the new value as the payload so as the 
  // user types the state is updated
  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  // This event handler is using event.target.value to get the
  // curent value of the input element that the user enters and by
  // using '||' with 0, ensures NaN does not show
  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(changeCost(carCost));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }))
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3"> Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              // removes the default 0 and allows you to delete or write
              // on the entire input field
              value={cost || ''}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
        <div className='field'>
          <button className='button is-link'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;