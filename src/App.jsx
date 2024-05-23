import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import EventBinding from './components/EventBinding'
import FunctionProps from './components/FunctionProps'
import ClassProps from './components/ClassProps'
import OnClick from './components/OnClick'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import List from './components/List'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counter/>
      <EventBinding/>
      <FunctionProps name="Ami" sem="6"/>
      <FunctionProps name="Avni" sem="4"/>

     <ClassProps name="Meshwa" sem="5"/>
     <OnClick/>
     

     <ParentComponent />
     <ConditionalRendering/>

     <List/>


    </>
  )
}

export default App
