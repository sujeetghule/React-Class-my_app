import React, { Component } from 'react'

const UpdateComponent = (OriginalComponent)=>{

    class NewComponent extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0,
          }
        }
        incrementCount=()=>{
            this.setState((prevState)=>{
                return {count:prevState.count+1}
            })
        }
        render() {
          return <OriginalComponent name={"ajay"} count={this.state.count} incrementCount />
        }
      }
      return NewComponent;
}


export default UpdateComponent