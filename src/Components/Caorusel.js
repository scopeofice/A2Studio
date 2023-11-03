import React from 'react';
// import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai'
import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs'


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
    <div className=' bg-pastel'>
      <div className="container">
        <div id="slide">
          <div className='item bg-[url(../../public/images/carousel/IMG20220501183253.jpg)]'>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item bg-[url(../../public/images/carousel/IMG20230329181628.jpg)]'>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">I believe everyone needs a comfortable lifestyle. As a designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item bg-[url(../../public/images/carousel/IMG20220702125129.jpg)]'>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item bg-[url(../../public/images/carousel/IMG20220501183253.jpg)]'>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">I believe everyone needs a comfortable lifestyle. As a designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item bg-[url(../../public/images/carousel/IMG20230329181628.jpg)]'>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          <div className='item bg-[url(../../public/images/carousel/IMG20220702125129.jpg)]'>
            <div className="content">
              <div className="name">A2 Studio</div>
              <p className="des">Hey! I am Ayushi Agrawal creator of A2 Studio & I am an Interior Designer.</p>
              <button>See more</button>
            </div>
          </div>
          
        </div>
        

        <div className="buttons">
          <button id="prev" onClick={handlePrev}>
            <BsArrowLeftCircle className='fill-white' style={{ fontSize: '36px' }}/>
          </button>
          <button id="next" onClick={handleNext}>
          <BsArrowRightCircle className='fill-white w-30' style={{ fontSize: '36px' }}/>
          </button>
        </div>
      </div>
    </div>
  );
}
