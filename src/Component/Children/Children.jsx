import "./Children.css";
import { useState } from 'react';
function Children()
{
    const cardData = [
        { title: 'Introduction to the Theory of Computation" by Michael Sipser',img:'https://m.media-amazon.com/images/I/81kZ3Gl3WKL._AC._SR360,460.jpg'},
        { title: 'The Pragmatic Programmer',img:'https://m.media-amazon.com/images/I/8144Vic9C5L._AC._SR360,460.jpg',description: 'Fresh out of college and with just a year of self-study behind him, Cory Althoff was offered a dream first job as a software engineer for a well-known tech company, but he quickly found himself overwhelmed by the amount of things he needed to know, but hadn’t learned yet. This experience combined with his personal journey learning to program inspired his widely praised guide, The Self-Taught Programmer. Now Corys back with another guide for the self-taught community of learners focusing on the foundations of computer science.' },
        { title: 'Computer Science for Kids: A Storytelling Approach',img:'https://m.media-amazon.com/images/I/71FJZN71kmL._AC._SR360,460.jpg',description: 'The Self-Taught Computer Scientist introduces beginner and self-taught programmers to computer science fundamentals that are essential for success in programming and software engineering fields. Computer science is a massive subject that could cover an entire lifetime of learning. This book does not aim to cover everything you would learn about if you went to school to get a computer science degree. Instead, Corys goal is to give you an introduction to some of the most important concepts in computer science that apply to a programming career. With a focus on data structures and algorithms, The Self-Taught Computer Scientist helps you fill gaps in your knowledge, prepare for a technical interview, feel knowledgeable and confident on the job, and ultimately, become a better programmer.' },
        { title: 'Structure and Interpretation of Computer Programs',img:'https://m.media-amazon.com/images/I/81jxiT9FNOL._AC._SR360,460.jpg',description: 'Description for Card 1' },
        { title:' Computer Programming for Absolute Beginners',img:'https://m.media-amazon.com/images/I/81uAjftkMtL._AC._SR360,460.jpg' ,description: 'Description for Card 1'},
        { title: 'Algorithms Unlocked',img:'https://m.media-amazon.com/images/I/91fy4joWQ5L._AC_SR480,570_.jpg',description: 'Description for Card 1' },
        { title: 'Database Systems',img:'https://m.media-amazon.com/images/I/61rSMJLrg9L._AC_SR480,570_.jpg',description: 'Description for Card 1' },
        { title: 'Operating System Concepts', img:'https://m.media-amazon.com/images/I/81QWIhOnoML._AC._SR360,460.jpg',description: 'Description for Card 1' },
        { title: 'Cracking the Coding Interview',img:'https://m.media-amazon.com/images/I/81ZKwsb6djL._AC._SR360,460.jpg',description: 'Description for Card 1'},
        { title: 'Card 10', img:'https://m.media-amazon.com/images/I/617ploOZSgL._AC._SR360,460.jpg' },
       
       
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
 

export default Children;