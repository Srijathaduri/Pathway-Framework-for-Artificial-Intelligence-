import React from 'react';
import Cards from './Cards';
import list from '../../public/aiprimerlist.json';
import linearlist from '../../public/linearlist.json';
import calculaslist from '../../public/calculaslist.json';
import optimizationlist from '../../public/optimizationlist.json';
import discretelist from '../../public/discretelist.json';
import pythonlist from '../../public/pythonlist.json';
import dataframelist from '../../public/dataframelist.json';
import pytorchlist from '../../public/pytorchlist.json';
import sklearnlist from '../../public/sklearnlist.json';
import TensorFlowlist from '../../public/TensorFlowlist.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import { Link } from 'react-router-dom';

function AIprimer()  {
  const filterData=list.filter((data)=>data.category==="AIprimer");
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
   <div>
       <div className=' items-center justify-center text-center p-20'>
            <h1 className='font-semibold text-2xl md:text-4xl text-white p-5 mt-28'>We're delighted to have you  {" "}<span className=' text-[#BCB88A]'>Here! :)</span></h1>
            <p className='font-normal text-base text-white mt-2 p-10'> AI Primer is your starting point for an exciting journey into Artificial Intelligence. Explore resources that simplify core concepts and skills, guiding you from foundational ideas to advanced applications. Designed to make AI accessible and engaging, this section empowers learners of all levels to understand and connect with the world of AI. Unlock the possibilities with clear, approachable insights into this transformative technology.</p>
            <Link to="/"><button className="bg-white text-[#011f4b] font-bold px-3 py-2 rounded-md hover:bg-slate-800 duration-300">Back</button></Link>
        </div>
    </div>
    <div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Math for AI </h1>

      <p className='font-normal text-base text-white mt-2 p-10'> Maths for AI helps you understand the key mathematical concepts behind artificial intelligence and machine learning. This section breaks down complex topics into simple, easy-to-understand lessons, making it accessible for learners of all ages and backgrounds.</p>

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
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Linear algebra</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>Linear Algebra is the branch of mathematics that deals with vectors, matrices, and linear transformations, and is fundamental to machine learning, data science, and AI. It helps in understanding data structures, solving systems of equations, and optimizing algorithms.</p>

      </div>
  
    <div>
    <Slider {...settings}>
    {linearlist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Calculus</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>Calculus helps AI recognize patterns and improve by adjusting predictions step-by-step. It acts like a “taste test,” refining each step for better accuracy. Key ideas like derivatives and integrals make AI learning fast and effective!</p>

      </div>
  
    <div>
    <Slider {...settings}>
    {calculaslist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Discrete Mathematics</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>Discrete Mathematics plays a foundational role in Artificial Intelligence (AI), particularly in areas like logic, algorithms, and optimization. Here are the key concepts from Discrete Mathematics that are crucial for AI</p>

    </div>
  
    <div>
    <Slider {...settings}>
    {discretelist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Optimization Theory</h1>
    <p className='font-normal text-base text-white mt-2 p-10'> Optimization Theory is crucial in AI because many AI models involve finding the "best" solution from a set of possibilities. Here are key concepts in Optimization Theory that are essential for AI</p>

    </div>
  
    <div>
    <Slider {...settings}>
    {optimizationlist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Python</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>Python for Artificial Intelligence (AI) fun and easy! Python is a powerful programming language that helps computers "think" and "learn" just like humans.
    Whether you're a beginner or already know a little about coding, our step-by-step lessons will guide you to build exciting AI projects. Start learning today and discover how Python can help you create smart, self-learning programs that can change the world!
    </p>
    </div>
  
    <div>
    <Slider {...settings}>
    {pythonlist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>DataFrame Work</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>DataFrame is like a super-smart table that helps organize and analyze data, especially in artificial intelligence (AI) and data science. Imagine a spreadsheet with rows and columns where each column holds one type of information (like names, numbers, or dates) and each row holds a set of related data points.
     DataFrame is like a data hub where information is neatly organized to be explored, analyzed, and used in AI projects. It makes working with data easy, clear, and powerful—whether you’re a beginner or an advanced data scientist!

    </p>
    </div>
  
    <div>
    <Slider {...settings}>
    {dataframelist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>PyTorch</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>PyTorch is a powerful, open-source machine learning library used for developing and training deep learning models. Created by Facebook’s AI Research lab, it is particularly popular among researchers and developers for its flexibility and ease of use.

    </p>
    </div>
  
    <div>
    <Slider {...settings}>
    {pytorchlist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>

    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Sklearn    </h1>
    <p className='font-normal text-base text-white mt-2 p-10'>Scikit-Learn (sklearn) is a key library in AI for building and evaluating machine learning models. It simplifies tasks like  data preprocessing, feature selection, model training, and model evaluation across a wide variety of algorithms . In AI, it’s commonly used to create predictive models, optimize algorithms, and validate results, making it an essential tool for structured machine learning projects.

    </p>
    </div>
  
    <div>
    <Slider {...settings}>
    {sklearnlist.map((item)=>(
      <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

      <Cards item={item} key={item.id}/>
      </div>
    ))}
      </Slider>
    </div>
    <div className='mt-28 items-center justify-center text-center'>
    <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Tensor Flow</h1>
    <p className='font-normal text-base text-white mt-2 p-10'>TensorFlow is a powerful AI framework developed by Google for building and deploying machine learning and deep learning models. It supports complex computations across CPUs and GPUs, enabling tasks like image recognition, natural language processing, and predictive modeling. Widely used for both research and production, TensorFlow is essential for developing scalable AI applications.

    </p>
    </div>
  
    <div>
    <Slider {...settings}>
    {TensorFlowlist.map((item)=>(
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




    

export default AIprimer
