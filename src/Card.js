import React, { Component } from 'react'

import {Route, Link } from 'react-router-dom';

export class Card extends Component {
    render() {
        return (
            <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div class="card p-0 overflow-hidden h-100 shadow">
                <img src={this.props.img} class="card-img-top"/>
                <div class ="card-body">
                <h5 class ="card-title">{this.props.title}</h5>
                <Route>
                <Link to={this.props.link} class ="btn btn-primary">Details</Link>
                </Route>
                </div>
            </div>
            </div>
        )
    }
}

export default Card
