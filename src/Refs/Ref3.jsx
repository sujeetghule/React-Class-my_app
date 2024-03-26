import React, { Component } from 'react'

 class Ref3 extends Component {
    constructor(props) {
      super(props)
    
      this.inputref = React.createRef();
      this.cbRef = null;
      this.setcbRef = (element)=>{
        this.cbRef=element;
      }
      console.log(this.cbRef);
    }
    componentDidMount(){
        alert(`${this.cbRef}`)
    }
    clickHandler=()=>{
        if(this.cbRef){
            alert(`${this.cbRef.value}`)
        }
        else{
            alert(`Not Valid`)
        }
    }



  render() {
    return (
      <div>
      <input type="text" className="inp1" ref={this.setcbRef} name="inp1" id="inp1" />
      <button onClick={this.clickHandler}>Click me</button>

      </div>
    )
  }
}

export default Ref3