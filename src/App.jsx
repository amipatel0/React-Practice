import React, { Suspense, useState } from 'react';

const LazyComponent = React.lazy(() => import('./components/LazyComponent'));

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useTranslation } from 'react-i18next';



function App() {
  const [show, setShow] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

// const [theme,setTheme]=useState('light');
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
        <button onClick={() => changeLanguage('en')}>English</button>&nbsp;&nbsp;
        <button onClick={() => changeLanguage('es')}>Spanish</button>&nbsp;&nbsp;
        <button onClick={()=>changeLanguage('gu')}>Gujarati</button>&nbsp;&nbsp;
        <button onClick={()=>changeLanguage('hi')}>Hindi</button>
      </header>
    </div>

    {/* <h1>Welcome to the React Lazy Loading Example</h1>
      <button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Lazy Component
      </button>
      
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )} */}


    {/* <ExpensiveComputationComponent/> */}

    {/* <CounterComponent/> */}
    {/* <ComponentPreviousValue/> */}
    {/* <DebouncedInputComponent/> */}

   {/* <ComponentExample2/> */}
    {/* <ComponentExample1/> */}
   {/* <ComponentExample/> */}

   {/* <AuthProvider>
    <Header/>
    <Profile/>
   </AuthProvider> */}

    {/* <ContextTheme.Provider value={{theme,setTheme}}>
      <ComponentTheme/>
    </ContextTheme.Provider> */}


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



