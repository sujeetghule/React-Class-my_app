import React, { Component } from 'react';

export class Ref5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.createEle = React.createRef();
    this.createEle1 = React.createRef();
  }

  componentDidMount() {
    console.log(this.createEle);
    console.log(this.createEle1);
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  clickHandler = () => {
    const { inputValue } = this.state;
    const element = this.createEle.current;
    if (inputValue === 'box1') {
      element.style.height = '500px';
      element.style.width = '500px';
      element.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2024/02/21/15/28/dahlia-8587940_1280.jpg")';
      element.style.backgroundPosition = 'center';
      element.style.backgroundRepeat = 'no-repeat';
      element.style.backgroundSize = 'cover'
    } else if (inputValue === 'box2') {
      element.style.height = '500px'; 
      element.style.width = '500px';
      element.style.backgroundImage = 'url("https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_640.jpg")';
      element.style.backgroundPosition = 'center';
      element.style.backgroundRepeat = 'no-repeat';
    } else {
      // Handle invalid input
      console.log('Invalid input');
    }
  };

  render() {
    return (
      <React.StrictMode>
        <input type='text' value={this.state.inputValue} onChange={this.handleChange}></input>

        <button onClick={this.clickHandler}>Click Here</button>

        <div className='box' ref={this.createEle} />

      </React.StrictMode>
    );
  }
}

export default Ref5;
