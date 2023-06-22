import React, { Component } from 'react'
import PropTypes from 'prop-types'

class lifeCycleExample extends Component {

    constructor(props){

        super(props)
        console.log("Constructor")

    }

    componentDidMount(){
        console.log("DIDMOUNT")
    }

    shouldComponentUpdate(nextProps, nextState){

    }

    componentWillUnmount(){
        console.log("WILLUNMOUNT: justo antes de desaparecer") 
    }


}