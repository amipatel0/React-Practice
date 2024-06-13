import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import CounterClick from './components/CounterClick';
import CounterHover from './components/CounterHover';
import User1 from './components/User1';
import Counter1 from './components/Counter1';
import CounterClick1 from './components/CounterClick1';
import CounterHover1 from './components/CounterHover1';
import ListAlbum from './components/ListAlbum';
import AlbumForm from './components/AlbumForm';
import { UserProvider } from './userContext';
import ComponentP from './ComponentP';
import ContextTheme from './components/ContextTheme';
import ComponentTheme from './components/ComponentTheme';

function App() {

  const [theme,setTheme]=useState('light');
  return (
    <>


    <ContextTheme.Provider value={{theme,setTheme}}>
      <ComponentTheme/>
    </ContextTheme.Provider>
{/* <UserProvider value="Ami">
  <ComponentP/>
</UserProvider> */}

{/* <AlbumForm/> */}
    {/* <ListAlbum/> */}
        {/* <h1><u> <b><i>Concept of Rendering Component</i></b></u></h1><br></br>
        <User1 name={(isLoggedIn)=>isLoggedIn ? 'Ami' : 'Avni'}/>
        <Counter1 render={(count,incrCount)=><CounterClick1 count={count} incrCount={incrCount}></CounterClick1>}/>
        <Counter1 render={(count,incrCount)=><CounterHover1 count={count} incrCount={incrCount}></CounterHover1>}/>
     */}
        {/* <Counter1>
          {
            (count,incrCount)=><CounterClick1 count={count} incrCount={incrCount}></CounterClick1>
          }
        </Counter1> */}
        








       {/* <h1><u> <b><i>Concept of Higher Order Component (HOC)</i></b></u></h1><br></br>
       <CounterClick name="Ami"/>
       <CounterHover sem="six" rno="32"/> */}




   {/* <ContainerMouse/> */}

    {/* <DataFetchingWithClick/> */}
    {/* <DataFetchingWithId/> */}
{/* <DataFetchingThirdPartyAPI/> */}
    {/* <ClassIntervalCounter/>
    <HookIntervalCounter/> */}

    {/* <MouseEventClass/>
    <MouseEventHooks/> */}

   {/* Using Class: <ClassCounter/>
   Using Hook: <CounterHook/> */}
    {/* <HookWithMap/> */}
{/* <NamesHook/> */}
  {/* Using class:<CounterClass/> */}

  {/* <HookCounter/> */}
 {/* <PortalNormal/> */}
 {/* <Portal/> */}

 {/* <ErrorBoundaryDemo>
         <Fruit fruitName="Tomato"/>

      </ErrorBoundaryDemo>
     <ErrorBoundaryDemo>
               <Fruit fruitName="Kiwi"/>

     </ErrorBoundaryDemo> */}
     

    {/* <ParentComp/> */}
        </> 
  );
}

export default App;
