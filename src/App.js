import React, {useState} from 'react';
import './App.css';
import Shop from './medicine-shop/shop';
import Display from './medicine-shop/Display';

function App() {
  const[usersList, setUsersList] = useState([]);
  const dataHandler = (PID,PName,PDesc,PPrice,PQty) => {
    setUsersList((prevData) => {
      return [
        ...prevData,{
          id: PID,
          desc:PDesc,
          name: PName,
          price: PPrice,
          qty: PQty,
          key: Math.random().toString(),

        },
      ];
    });
  };
  return (
    <div className="App">
      <Shop onSaveData={dataHandler}/>
      <Display users={usersList}/>
    </div>
  );
}

export default App;
