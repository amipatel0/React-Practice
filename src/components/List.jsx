import React from 'react'

function List() {
    let fruits=['apple','banana','orange','graps','kiwi'];
    let position = fruits.indexOf("apple") + 1;
    let flength = fruits.length;
    fruits.push("Lemon");//add
    let fruit = fruits.pop();
    let fruit1 = fruits.shift();
    const merge = fruit.concat(fruit1);
    let text = [];

    for (let i = 0; i < flength; i++) {
      text.push(<li key={i}>{fruits[i]}</li>);
    }
  
    


    let cars=['BMW','Eco','XUV','Alto'];
    let clength = cars.length;


    let biscuits=['parle-g','oreo','good-day'];
    let blength = biscuits.length;

    

    const mylist=biscuits.map((ls) => <div>{ls}</div>);

    const s = [
      {sid: 1, sname: 'ami', sem: '6',branch:'BCA'} ,
  {sid: 2, sname: 'avni', sem: '5',branch:'MCA'} ,
 { sid: 3, sname: 'disha', sem: '7',branch:'BBA'} ,
  {sid: 4, sname: 'kriyaa', sem: '6',branch:'MBA' },
 { sid: 5, sname: 'meshwa', sem: '8',branch:'BCA' }
];



const numbers = [45, 4, 9, 16, 25]; 
let txt = ""; 
numbers.forEach(myFunction); 
function myFunction(value) { 
  txt += value+","; }



  const numbers1 = [45, 4, 9, 16, 25]; 
  const numbers2 = numbers1.map(myFunction1); 
  function myFunction1(value) { 
    return value * 2; }
   
  return (
    <div>
           <div>Using List: {fruits.map((ls) => <div key={ls}>{ls}</div>)}</div>

          <div>Using indexWised:</div>
          <div>{cars[0]}</div>
          <div>{cars[1]}</div>

          <div>Using Variable: {mylist}</div>

         <div>Using Json Object: {s.map((ls) => 
         <div key={ls.sid}>Name: {ls.sname}, Sem: {ls.sem}, Branch: {ls.branch}</div>)}</div>

         <div>Using indexOf: {position}</div>

        <div>Length of Fruits array: {flength}</div>
        <div>Looping Array Elements:{text}</div>
        <div>Using Pop:{fruit}</div>
        <div>Using Shift:{fruit1}</div>
        <div>Using Concat:{merge}</div>
        <div>Length of Cars array: {clength}</div>

        <div>Length of Biscuit array: {blength}</div>

        <div>Array value using foreach:{txt}</div>
        <div>Array value multiply with 2:
          {numbers2.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
        </div>



       

      
    </div>
  )
}

export default List
