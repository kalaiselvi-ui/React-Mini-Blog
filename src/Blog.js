import React from 'react';
import data from './data';
import Card from './Card';

const Blog = () => {
    return (
        <section className="py-4 py-lg-5 container">
            <div className="row justify-content-center">

            {data.cardData.map((item, index)=>{
                   return(
                    <Card 
                     img={item.img} 
                     title={item.title} 
                     key={index} 
                     link={`/details/${item.id}`}/>
                   )
            })}
         
            </div>
        </section>

    )

}

export default Blog;