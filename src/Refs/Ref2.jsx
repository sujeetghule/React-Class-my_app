import React, { Component } from 'react'

class Ref2 extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef1 = React.createRef();
      this.inputRef2 = React.createRef();

    }

    componentDidMount() {
        console.log(this.inputRef1);
        console.log(this.inputRef2);
    }


    clickHandler = () => {
        if(this.inputRef1.current.value===`root`&& this.inputRef2.current.value===`root`){
            alert(`Hello ${this.inputRef1.current.value}`)
        }
        else{
            alert(`${this.inputRef1.current.value}is not match with password`);

        }
    };

  render() {
    return (
      <>
      <input type="text" className="inp1" ref={this.inputRef1} name="inp1" id="inp1" />
      <input type="password" className="inp2" ref={this.inputRef2}  name="inp2" id="inp2" />
      <button onClick={this.clickHandler}>Click me</button>
      </>
    )
  }
}

export default Ref2