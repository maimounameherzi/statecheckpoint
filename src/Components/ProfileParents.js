import React, { Component } from 'react'
import Profile from './Profile'
import {Button} from 'react-bootstrap'
export default class ProfileParents extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Person: { fullName:'Maimouna Meherzi',bio:'This is my bio', imgSrc:'https://lh3.googleusercontent.com/a-/AOh14GjgKPcJWqRE1_KmcI1oZ8kH0ejeQ6RpnHfCzfPy=s96-c-rg-br100', profession:'FullStack student'},
            show: true
        }
    }

    toggleShow = () => {
        this.setState({ show: !this.state.show})
    }
    render() {
        return (
            <div>
                <Button className="d-flex mybtn" variant="primary" onClick={this.toggleShow}>
                {this.state.show ? 'Hide profile ' : 'Show profile '}
                </Button>
                {this.state.show && <Profile person={this.state.Person}/>}
            </div>
        )
    }
}
