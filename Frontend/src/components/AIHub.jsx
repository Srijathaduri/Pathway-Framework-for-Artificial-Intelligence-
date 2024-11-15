import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import  list  from "../../public/list.json";
import Cards from './Cards';
function AIHub() {
  const filterData=list.filter((data)=>data.category==="AIHub");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return(<>
    <div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-bold text-base pb-2'>AI Hub</h1>
      <p className='font-normal text-base pb-2'>Dive into a mix of basics, real-life examples, and pathways for growth in AI. Whether you’re curious about how AI works, where it’s used in everyday life, or how to build a future in the field, AIHub has something for everyone—simple, clear, and inspiring for all ages.</p>
      </div>
  
    <div>
    <Slider {...settings}>
    {list .map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    </div>
    </>
    ) 
}
export default AIHub
