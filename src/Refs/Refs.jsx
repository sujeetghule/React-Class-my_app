import React, { Component } from 'react'

export class Refs extends Component {
    constructor(props) {
      super(props)
    
        this.inpurRef1= React.createRef();
    }
    componentDidMount(){
        console.log(this.inpurRef1);
    }
    handerMethod = ()=>{
        alert(`${this.inpurRef1.current.value} `)
    }
  render() {
    return (
      <div>

        <input type="text" name="" ref={this.inpurRef1} id="" />
        <input type="button" value="Clik mEEEE" onClick={this.handerMethod} />
      </div>
    )
  }
}
export default Refs

// import React, { Component } from 'react';
// class Refs extends Component {
//     constructor(props) {
//         super(props);

//         this.inputRef = React.createRef();
//     }
//     componentDidMount() {
//         this.inputRef.current.focus();
//     }

//     clickHandler = () => {
//         alert(`${this.inputRef.current.value}`);
//     };

//     render() {
//         return (
//             <>
//                 <input type="text" name="" className="inp1" ref={this.inputRef} id=""/>
//                 <button onClick={this.clickHandler}>Click me</button>
//             </>
//         );
//     }
// }

// export default Refs;
