import React, { Component } from 'react'
import IMG from '../spinn.gif'

export default class ErrorBoundies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }
    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }



    render() {
        if (this.state.hasError) {
            return (
                <img src={IMG} alt="" />
            )
        }
        else {
            return (
                this.props.children
            )
        }
    }
}
