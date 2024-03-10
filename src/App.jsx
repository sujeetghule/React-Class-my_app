import React, { Fragment } from "react";
import './Sections/Styling/App.css'
import Aside from "./Sections/Aside";
import Footer from "./Sections/Footer";
import Main from "./Sections/Main";
import Nav from "./Sections/Nav";
const App = ()=>{
    return (
        <Fragment>
            <Nav></Nav>
            <section>
            <Aside></Aside>
            
            <Main></Main>
            </section>
            <Footer></Footer>
            
        </Fragment>
    )
}
export default App;