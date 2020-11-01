import React from 'react';
import Data from './Data';
import Card  from './Card'

const newArr = Data.map((value)=>{
  return <Card
    key = {value.id}
    poster = {value.poster}
    title = {value.title}
    link = {value.link}
  />;
})

const App = () =>{
  return (
    <React.Fragment>
    <h1 className="heading">NETFLIX SERIES</h1>
    <div className="container">
      {newArr}
    </div>
  </React.Fragment>
  )
}

console.log(newArr);
export default App;