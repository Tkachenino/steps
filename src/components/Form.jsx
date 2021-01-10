import {useState} from 'react';
import PropTypes from 'prop-types';

const Form = ({edditAction, onSubmitHandler}) => {

  const [action, setAction] = useState({...edditAction});

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(action);
    setAction({date: '', range: ''});
  }

  const onValueChangeHandler = ({target}) => {
    const name = target.name;
    const value = target.value;
    setAction({...action, [name]: value})
  }

  return (
    <form className='Form' onSubmit={($e) => onSubmit($e)}>
      <div className='Field'>
        <label className='FieldLabel' htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
        <input className='FieldInput' id='date'  name='date' placeholder='ДД.ММ.ГГГГ' maxLength='10' value={action.date} onChange={($e) => onValueChangeHandler($e)}/>
      </div>
      <div className='Field'>
        <label className='FieldLabel' htmlFor='range'>Пройдено км</label>
        <input type='number' className='FieldInput' id='range' name='range' value={action.range} onChange={($e) => onValueChangeHandler($e)}/>
      </div>
      <button className='Button' type='submit'>ОК</button>
    </form>
  )
};

Form.defaultProps = {
  edditAction: {date: '', range: ''}
};

Form.propTypes = {
  onSubmitHandler: PropTypes.func,
  edditAction: PropTypes.shape({
    date: PropTypes.string,
    range:  PropTypes.string
  }) || PropTypes.shape({
  date: PropTypes.string,
  range:  PropTypes.number,
  id:  PropTypes.string,
})
}

export default Form;