import React, { Component } from 'react'
import Props4 from './Props4'
import { Props6 } from './Props6'

export default class Props3 extends Component {
  render() {
    return (
        <>
      <Props4 name="Sujeet"age="23" ></Props4>
      <Props4 name="Ganesh"age="23" ></Props4>
      <Props4 name=""age="23" ></Props4>
      <Props6></Props6>
      </>
    )
  }
}
