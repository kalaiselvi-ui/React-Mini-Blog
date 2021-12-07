import React, { Component } from 'react';
import data from './data';

export class Details extends Component {
    render() 
{
    let getId = this.props.match.params.id;
    const getData = data.cardData[getId -1];
        return (
            <>
              <section className="py-4 py-lg-5 container">
              <div className="row justify-content-center">
                  <div className="col-8">
                  <img src={getData.img} className="img-fluid" />
                  <h1>{getData.title}</h1>
                  <p>{getData.desc}</p>
                  </div>
              </div>
              </section>
            </>
        )
    }
}

export default Details
