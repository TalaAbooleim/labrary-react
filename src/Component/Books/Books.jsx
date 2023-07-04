// import React, { useEffect, useState } from 'react';
import "./Books.css";
function Books()
{
    const cardData = [
        { title: 'Introduction to the Theory of Computation" by Michael Sipser',img:'https://th.bing.com/th/id/OIP.LF_KZtejYYGF-wkkaOhWFQHaLL?w=130&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
        { title: 'The Pragmatic Programmer',img:'https://th.bing.com/th/id/OIP.Cme3UuSw2-o_ClkNpQe4-wF6Hz?pid=ImgDet&rs=1' },
        { title: 'Computer Science for Kids: A Storytelling Approach',img:'https://th.bing.com/th/id/OIP.81HMoYB9d2JfpFDJhQ3o3gAAAA?w=202&h=236&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: 'Structure and Interpretation of Computer Programs',img:'https://m.media-amazon.com/images/I/71RUhIyCykL._AC_UY327_FMwebp_QL65_.jpg' },
        { title:' Computer Programming for Absolute Beginners',img:'https://m.media-amazon.com/images/I/7102H4YF1tL._AC_UY327_FMwebp_QL65_.jpg' },
        { title: 'Algorithms Unlocked',img:'https://th.bing.com/th/id/OIP.l3eTtEpl1QwvpW9kCYsUcwAAAA?w=202&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: 'Database Systems',img:'https://th.bing.com/th/id/OIP.ztXa3RzCTy6biXAMCJlk7gAAAA?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: 'Operating System Concepts', img:'https://th.bing.com/th/id/OIP.LF_KZtejYYGF-wkkaOhWFQHaLL?w=130&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: 'Cracking the Coding Interview',img:'https://th.bing.com/th/id/OIP.5W9sK6_ny24hRNz6vWguVgHaJy?w=202&h=267&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
        { title: 'Card 10', img:'https://th.bing.com/th/id/OIP.iOLD14bjXnuGdluVz9Fn1AAAAA?w=202&h=272&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
       
        // Add more card data objects as needed
      ];
    


  return (
    <div className="card-grid">
    {cardData.map((card, index) => (
      <div className="card" key={index}>
        
        <img src={card.img} alt="Image description" />
        <h2>{card.title}</h2>
        <p>{card.content}</p>
      </div>
    ))}
  </div>
  )
 
}
 

export default Books;