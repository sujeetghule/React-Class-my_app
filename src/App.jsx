import React, { Fragment } from "react";
import Parent from "./Props/Parent";
// import './Sections/Styling/App.css'
// import Aside from "./Sections/Aside";
// import Footer from "./Sections/Footer";
// import Main from "./Sections/Main";
// import Nav from "./Sections/Nav";
import Props1 from "./Props/Props1";
import Props2 from "./Props/Props2";
import PropsDes1 from "./Props/PropsDes1";
const App = ()=>{
    
    return (
        <Fragment>
           {/* 
           Section app
           <div>
           <Nav></Nav>
            <section>
            <Aside></Aside>
            
            <Main></Main>
            </section>
            <Footer></Footer>
           </div> 
           ---------------------------------------------------------------------------
           */}
           
           <Props1></Props1>
           <Props2 name ="Sujeet"></Props2>
           <Parent></Parent>
           <PropsDes1></PropsDes1>

            
        </Fragment>
    )
}
export default App;