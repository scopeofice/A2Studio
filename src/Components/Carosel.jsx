import React from 'react';
import '../Styles/style.css';
import ay from '../Images/IMG20220501183253.jpg'
import a2 from '../Images/IMG20230329181628.jpg'
import ag from '../Images/IMG20230124132457.jpg'


export default function Carosel() {
  const handleNext = () => {
    const slide = document.getElementById('slide');
    const lists = slide.querySelectorAll('.item');
    slide.appendChild(lists[0]);
  };

  const handlePrev = () => {
    const slide = document.getElementById('slide');
    const lists = slide.querySelectorAll('.item');
    slide.prepend(lists[lists.length - 1]);
  };

  return (
    <div>
      <div className="container">
        <div id="slide">
          <div className='item' style={{ backgroundImage: `url(${ay})` }}>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item' style={{ backgroundImage: `url(${a2})` }}>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">I believe everyone needs a comfortable lifestyle. As a designer, I am helping clients to create the best ideas and solutions for space planning to make practical, beautiful, and elegant spaces they use every day.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item' style={{ backgroundImage: `url(${ag})` }}>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item' style={{ backgroundImage: `url(${ay})` }}>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">I believe everyone needs a comfortable lifestyle. As a designer, I am helping clients to create the best ideas and solutions for space planning to make practical, beautiful, and elegant spaces they use every day.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item' style={{ backgroundImage: `url(${ag})` }}>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          
        </div>
        

        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button id="next" onClick={handleNext}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
