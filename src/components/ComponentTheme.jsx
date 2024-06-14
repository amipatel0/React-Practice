import React,{useContext} from 'react';
import ContextTheme from './ContextTheme';

const ComponentTheme=()=>{
    const {theme,setTheme}=useContext(ContextTheme);



    const themeToggle=()=>{
        setTheme((prevTheme)=>(prevTheme === 'light' ? 'dark' : 'light'));

    };
    return(
        
            <div style={{background: theme === 'light' ? 'yellow' : 'blue',color: theme === 'light' ? 'blue' : 'yellow',padding:'30px'}}>
            <p>The Current Theme is {theme}</p>
            <button onClick={themeToggle}>Toggle Theme</button>
            </div>
    );
};
export default ComponentTheme