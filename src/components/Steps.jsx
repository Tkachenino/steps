import {useState} from 'react';
import {nanoid} from 'nanoid';
import Form from './Form';
import List from './List';

const Steps = () => {
  const [list, setList] = useState([
    {date: '05.01.2019', range: 20, id: nanoid()},
    {date: '05.01.2021', range: 15, id: nanoid()},
    {date: '04.01.2020', range: 4, id: nanoid()},
    {date: '01.01.2020', range: 23, id: nanoid()},
  ]);

  const [isEdditMode, setEdditMode] = useState(false);
  const [edditAction, setEdditAction] = useState();

  const deleteDate = (id) => {
      const newList = list.filter(item => item.id !== id);
      setList(newList);
  }

  const edditDate = (id) => {
    debugger;
    const action = list.find(item => item.id === id);
    setEdditMode(true);
    setEdditAction(action);
}


  const addAction = (action) => {
    let changedAction = list.find(i => i.date === action.date);
    if (changedAction) {
      changedAction = {...changedAction, range: changedAction.range +  Number(action.range)}
      setList([...list.filter(item => item.date !== action.date), changedAction]);
    } else {
      setList([...list, {date: action.date, range: Number(action.range) , id: nanoid()}]);
    }
  }

  return (
    <div className='App'>
      <Form isEdditMode={isEdditMode} edditAction={edditAction} onSubmitHandler={addAction}/>
      <List list={list} onButtonDeleteHandler={deleteDate} onButtonEdditHandler={edditDate}/>
    </div>
  )
};

export default Steps;