import {useState} from 'react';
import {nanoid} from 'nanoid';
import Form from './Form';
import List from './List';

const Steps = () => {
  const [list, setList] = useState([
    {date: '05.01.2019', range: '20', id: nanoid()},
    {date: '05.01.2021', range: '15', id: nanoid()},
    {date: '04.01.2020', range: '4', id: nanoid()},
    {date: '01.01.2020', range: '23', id: nanoid()},
  ]);

  const [edditAction, setEdditAction] = useState({date: '', range: ''});

  const deleteDate = (id) => {
      const newList = list.filter(item => item.id !== id);
      setList(newList);
  }

  const edditDate = (id) => {
    const action = list.find(item => item.id === id);
    setEdditAction({...action, range: action.range.toString()});
}


  const addDate = (action) => {
    let changedAction = list.find(i => i.date === action.date);
    if (changedAction) {
      changedAction = {...changedAction, range:  String(Number(changedAction.range) +  Number(action.range))}
      setList([...list.filter(item => item.date !== action.date), changedAction]);
    } else {
      setList([...list, {date: action.date, range: action.range , id: nanoid()}]);
    }
  }

  const changeEdditActionValue = (action) => {
    setEdditAction(prevState => ({...prevState, ...action}))
  }

  const changeAction = (id) => {
    setList([...list.filter(item => item.id !== id), edditAction]);
    setEdditAction({date: '', range: ''});
  }

  return (
    <div className='App'>
      <Form edditAction={edditAction} onChangeValue={changeEdditActionValue} onChangeActionHandler={changeAction} onAddActionHandler={addDate}/>
      <List list={list} onButtonDeleteHandler={deleteDate} onButtonEdditHandler={edditDate}/>
    </div>
  )
};

export default Steps;