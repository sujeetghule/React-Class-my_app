import React, { Fragment } from "react";
import { DefaultProps1 } from "./Props/DefaultProps1";
// import Parent from "./Props/Parent";
// import './Sections/Styling/App.css'
// import Aside from "./Sections/Aside";
// import Footer from "./Sections/Footer";
// import Main from "./Sections/Main";
// import Nav from "./Sections/Nav";
// import Props1 from "./Props/Props1";
// import Props2 from "./Props/Props2";
import './Props/Props.css'
import State1 from "./Props/State1";
import State2 from "./Props/State2";
import State3 from "./Props/State3";
import State4 from "./Props/State4";
// import Props3 from "./Props/Props3";
// import { Props5 } from "./Props/Props5";
// import { Props7 } from "./Props/Props7";
// import { Props9 } from "./Props/Props9";
// import PropsDes1 from "./Props/PropsDes1";
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
           ******************************************************************************
           */}
           
           {/* 
           11 march 2023 Props
           <Props1></Props1>
           <Props2 name ="Sujeet"></Props2>
           <Parent></Parent>
           <PropsDes1></PropsDes1> 
           *****************************************************************************
           */}

            {/* <Props3></Props3>
            <Props5/>
            <Props7/>
            <Props9/> 
            *****************************************************************************

            */}

            <DefaultProps1 name = "Vijay"></DefaultProps1>
            <DefaultProps1></DefaultProps1>
            <State1></State1>
            <State2/>
            <State3 user ="Sujeet"/>
            <State4/>

        </Fragment>
    )
}
export default App;