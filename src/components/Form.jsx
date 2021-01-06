import {useState} from 'react';

const Form = ({isEdditMode, edditAction, onSubmitHandler}) => {
  const [action, setAction] = useState({date: '', range: ''});
  
  // if (isEdditMode) {
  //   setAction(edditAction)
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    onSubmitHandler(action);
    setAction({date: '', range: ''});
  }

  const onValueChangeHandler = (e, name) => {
    setAction({...action, [name]: e.target.value})
  }

  return (
    <form className='Form' onSubmit={($e) => onSubmit($e)}>
      <div className='Field'>
        <label className='FieldLabel' htmlFor='date'>Дата (ДД.ММ.ГГГГ)</label>
        <input className='FieldInput' id='date' placeholder='ДД.ММ.ГГГГ' maxLength='10' value={action.date} onInput={($e) => onValueChangeHandler($e, 'date')}/>
      </div>
      <div className='Field'>
        <label className='FieldLabel' htmlFor='range'>Пройдено км</label>
        <input type='number' className='FieldInput' id='range' value={action.range} onInput={($e) => onValueChangeHandler($e, 'range')}/>
      </div>
      <button className='Button' type='submit'>ОК</button>
    </form>
  )
};

export default Form;