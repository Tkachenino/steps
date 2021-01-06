const List = ({list, onButtonDeleteHandler, onButtonEdditHandler}) => {
  return (
    <table className='Table'>
      <thead>
        <tr className='TableRow'>
        <th>Дата (ДД.ММ.ГГГГ)</th>
        <th>Пройдено км</th>
        <th>Действия</th>
       </tr>
      </thead>
      <tbody className='TableBody'>

        {list.sort((a, b) => {
          const DateA = new Date(a.date).getTime();
          const DateB = new Date(b.date).getTime();

          return (DateB - DateA);
        })
        .map(item => (
          <tr className='TableRow' key={item.id}>
          <td>{item.date}</td>
          <td>{item.range}</td>
          <td className='Action'>
            <button className='ButtonEddit'  onClick={() => onButtonEdditHandler(item.id)}/>
            <button className='ButtonDelete' onClick={() => onButtonDeleteHandler(item.id)}/>
          </td>
        </tr> 
        ))}
      </tbody>
    </table>
  )
};

export default List;