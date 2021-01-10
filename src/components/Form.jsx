import {useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({edditAction, onChangeValue, onChangeActionHandler, onAddActionHandler}) => {

  const [action, setAction] = useState({date: '', range: ''});

  const onSubmit = (e) => {
    e.preventDefault();
    if (edditAction.id) {
      onChangeActionHandler(edditAction.id);
    } else if (action.date && action.range) {
      onAddActionHandler(action);
      setAction({date: '', range: ''});
    }
  }

  const onValueChangeHandler = ({target}) => {
    const name = target.name;
    const value = target.value;
    if (edditAction.id) {
      onChangeValue({[name]: value});
    } else (
      setAction({...action, [name]: value})
    )
  };

  const date = edditAction.date ? edditAction.date : action.date;
  const range = edditAction.range ? edditAction.range : action.range;

  return (
    <form className='Form' onSubmit={(e) => onSubmit(e)}>
      <div className='Field'>
        <label className='FieldLabel' htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
        <input className='FieldInput' id='date'  name='date' placeholder='ДД.ММ.ГГГГ' maxLength='10' value={date} onChange={(e) => onValueChangeHandler(e)}/>
      </div>
      <div className='Field'>
        <label className='FieldLabel' htmlFor='range'>Пройдено км</label>
        <input type='number' className='FieldInput' id='range' name='range' value={range} onChange={(e) => onValueChangeHandler(e)}/>
      </div>
      <button className='Button' type='submit'>ОК</button>
    </form>
  )
};

Form.propTypes = {
  edditAction: PropTypes.shape({
    date: PropTypes.string,
    id: PropTypes.string,
    range: PropTypes.string
  }),
  onChangeValue: PropTypes.func,
  onChangeActionHandler: PropTypes.func,
  onAddActionHandler: PropTypes.func
}

export default Form;