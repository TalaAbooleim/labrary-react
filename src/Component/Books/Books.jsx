
import "./Books.css";
import { useState } from 'react';
function Books()
{
    const cardData = [
        { title: 'Introduction to the Theory of Computation" by Michael Sipser',img:'https://th.bing.com/th/id/OIP.LF_KZtejYYGF-wkkaOhWFQHaLL?w=130&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',description: 'Everything You Need to Ace Computer Science and Coding in One Big Fat Notebook: The Complete Middle School Study Guide (Big Fat Notebooks) Paperback – Illustrated, April 14, 2020'},
        { title: 'The Pragmatic Programmer',img:'https://th.bing.com/th/id/OIP.Cme3UuSw2-o_ClkNpQe4-wF6Hz?pid=ImgDet&rs=1',description: 'Fresh out of college and with just a year of self-study behind him, Cory Althoff was offered a dream first job as a software engineer for a well-known tech company, but he quickly found himself overwhelmed by the amount of things he needed to know, but hadn’t learned yet. This experience combined with his personal journey learning to program inspired his widely praised guide, The Self-Taught Programmer. Now Corys back with another guide for the self-taught community of learners focusing on the foundations of computer science.' },
        { title: 'Computer Science for Kids: A Storytelling Approach',img:'https://th.bing.com/th/id/OIP.81HMoYB9d2JfpFDJhQ3o3gAAAA?w=202&h=236&c=7&r=0&o=5&dpr=1.3&pid=1.7',description: 'The Self-Taught Computer Scientist introduces beginner and self-taught programmers to computer science fundamentals that are essential for success in programming and software engineering fields. Computer science is a massive subject that could cover an entire lifetime of learning. This book does not aim to cover everything you would learn about if you went to school to get a computer science degree. Instead, Corys goal is to give you an introduction to some of the most important concepts in computer science that apply to a programming career. With a focus on data structures and algorithms, The Self-Taught Computer Scientist helps you fill gaps in your knowledge, prepare for a technical interview, feel knowledgeable and confident on the job, and ultimately, become a better programmer.' },
        { title: 'Structure and Interpretation of Computer Programs',img:'https://m.media-amazon.com/images/I/71RUhIyCykL._AC_UY327_FMwebp_QL65_.jpg',description: 'Description for Card 1' },
        { title:' Computer Programming for Absolute Beginners',img:'https://m.media-amazon.com/images/I/7102H4YF1tL._AC_UY327_FMwebp_QL65_.jpg' ,description: 'Description for Card 1'},
        { title: 'Algorithms Unlocked',img:'https://th.bing.com/th/id/OIP.l3eTtEpl1QwvpW9kCYsUcwAAAA?w=202&h=300&c=7&r=0&o=5&dpr=1.3&pid=1.7',description: 'Description for Card 1' },
        { title: 'Database Systems',img:'https://th.bing.com/th/id/OIP.ztXa3RzCTy6biXAMCJlk7gAAAA?w=201&h=310&c=7&r=0&o=5&dpr=1.3&pid=1.7',description: 'Description for Card 1' },
        { title: 'Operating System Concepts', img:'https://th.bing.com/th/id/OIP.LF_KZtejYYGF-wkkaOhWFQHaLL?w=130&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7',description: 'Description for Card 1' },
        { title: 'Cracking the Coding Interview',img:'https://th.bing.com/th/id/OIP.5W9sK6_ny24hRNz6vWguVgHaJy?w=202&h=267&c=7&r=0&o=5&dpr=1.3&pid=1.7',description: 'Description for Card 1'},
        { title: 'Card 10', img:'https://th.bing.com/th/id/OIP.iOLD14bjXnuGdluVz9Fn1AAAAA?w=202&h=272&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
       
       
      ];
      const [activeCard, setActiveCard] = useState(null);

  const handleClick = (index) => {
    setActiveCard(index === activeCard ? null : index);
  };

    


  return (
    <div className="card-grid">
    {cardData.map((card, index) => (
      <div className={`card ${index === activeCard ? 'active' : ''}`} key={index} onClick={() => handleClick(index)}>
        <img src={card.img} alt="Image description" />
        <h2>{card.title}</h2>
        {index === activeCard && <p>{card.description}</p>}
      </div>
    ))}
  </div>
  )
 
}
 

export default Books;