import React from 'react';
import { Link } from 'react-router-dom';
import ml from '../../public/ml.json';
import Intelligence from '../../public/Intelligence.json';
import Cards from './cards'; 
import cnn from '../../public/cnn.json';
import rnn from '../../public/rnn.json';
import genai from '../../public/genai.json'
import NeuralNetwork from '../../public/NeuralNetwork.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
function AIinsites() {
  var settings = {
    dots: false,
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
          dots: false
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
  
  return (
   <>
     <div>
       <div className='items-center justify-center text-center'>
            <h1 className='font-semibold text-2xl md:text-4xl text-white p-5 mt-20'>We're delighted to have you  {" "}<span className=' text-[#BCB88A]'>Here! :)</span></h1>
            <p className='font-normal text-base text-white mt-2 p-10' > Welcome to AI-Insites, your comprehensive guide to understanding the transformative world of Artificial Intelligence. This section delves into the core concepts shaping AI today. From the groundbreaking capabilities of Artificial Intelligence (AI) to the adaptive learning techniques of Machine Learning (ML), explore how these technologies are revolutionizing industries. Learn about Convolutional Neural Networks (CNN), the driving force behind advancements in image recognition and computer vision, and Recurrent Neural Networks (RNN), which power breakthroughs in natural language processing and sequence data analysis. Dive into the essence of AI and uncover how these cutting-edge technologies are shaping our future.
            This structure offers a professional and engaging introduction to your AI-Anveshak website while maintaining a focus on clarity.</p>
            <Link to="/anveshakhome"><button className="bg-white text-[#011f4b] font-bold px-3 py-2 rounded-md hover:bg-slate-800 duration-300">Back</button></Link>
        
        </div>
        
        <div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Artificial Intelligence</h1>

      <p className='font-normal text-base text-white mt-2 p-10'> Artificial Intelligence (AI) is the technology that enables machines and computers to mimic human intelligence. It allows them to learn from data, solve problems, and make decisions, often faster and more accurately than humans. AI is all around us—powering virtual assistants like Alexa, providing personalized recommendations on Netflix and YouTube, and even assisting in self-driving cars. By learning from patterns and improving over time, AI helps simplify tasks and solve complex challenges, making it a transformative force in industries like healthcare, education, and everyday life</p>

      </div>


      <Slider {...settings}>
      {Intelligence.map((item)=>(
        <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

       <Cards item={item} key={item.id}/>
       </div>
     ))}
       </Slider>
      </div>
      </div>


      <hr className='line h-1 w-100% bg-white mt-10'/>

      
      <div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Machine Learning</h1>

      <p className='font-normal text-base text-white mt-2 p-10'> Machine Learning (ML) is a subset of Artificial Intelligence (AI) that enables computers to learn from data and improve their performance on tasks without being explicitly programmed. By identifying patterns and relationships in data, ML models can make predictions, automate processes, and solve problems efficiently. It powers applications like personalized recommendations, voice assistants, fraud detection, and self-driving cars. Machine Learning is transforming industries by creating intelligent systems capable of adapting and evolving to meet complex challenges in real-time.</p>

      </div>


    
  
       <div>
      <Slider {...settings}>
      {ml.map((item)=>(
        <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

       <Cards item={item} key={item.id}/>
       </div>
     ))}
       </Slider>
      </div> 
      </div>
<hr className='line h-1 w-100% bg-white mt-10'/>

<div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Neural Network </h1>

      <p className='font-normal text-base text-white mt-2 p-10'> Machine Learning (ML) is a subset of Artificial Intelligence (AI) that enables computers to learn from data and improve their performance on tasks without being explicitly programmed. By identifying patterns and relationships in data, ML models can make predictions, automate processes, and solve problems efficiently. It powers applications like personalized recommendations, voice assistants, fraud detection, and self-driving cars. Machine Learning is transforming industries by creating intelligent systems capable of adapting and evolving to meet complex challenges in real-time.</p>

      </div>    
       
       <div>
      <Slider {...settings}>
      {NeuralNetwork.map((item)=>(
        <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

       <Cards item={item} key={item.id}/>
       </div>
     ))}
       </Slider>
      </div> 
     </div>




      <hr className='line h-1 w-100% bg-white mt-10'/>


      <div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
         <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Convolutional Neural Network</h1>
        <p className='font-normal text-base text-white mt-2 p-10'>A Convolutional Neural Network is a deep learning model primarily used for processing grid-like data, particularly images. It works by applying filters to the input data through convolutional layers, which automatically detect key features like edges, shapes, and textures. These features are then processed and combined in further layers to perform tasks like image classification, object detection, and even medical image analysis. CNNs are highly effective in tasks that require spatial feature extraction and are widely used in computer vision and other complex pattern recognition tasks.</p>

       </div>
  
       <div>
      <Slider {...settings}>
      {cnn.map((item)=>(
        <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

       <Cards item={item} key={item.id}/>
       </div>
     ))}
       </Slider>
      </div>
      </div>

      <hr className='line h-1 w-100% bg-white mt-10'/>
<div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
         <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Recurrent Neural Network</h1>
        <p className='font-normal text-base text-white mt-2 p-10'>Recurrent Neural Network (RNN) is a type of neural network designed to handle sequential data by using connections that allow information to persist across steps. Unlike traditional networks, RNNs have loops in their architecture, enabling them to consider the context of previous inputs when processing current ones. This makes them ideal for tasks like language translation, speech recognition, and time-series forecasting. Advanced versions, such as Long Short-Term Memory (LSTM) and Gated Recurrent Units (GRU), address challenges like vanishing gradients, allowing effective processing of long sequences.</p>

       </div>
  
       <div>
      <Slider {...settings}>
      {rnn.map((item)=>(
        <div className="px-3" key={item.id}> {/* Adjusted padding for better spacing */}

       <Cards item={item} key={item.id}/>
       </div>
     ))}
       </Slider>
      </div>
</div>
      <hr className='line h-1 w-100% bg-white mt-10'/>
      <div className='text-white font-semibold max-w-screen-2xl container mx-auto md:px-20 px-4 '>
      <div className='mt-28 items-center justify-center text-center'>
         <h1 className='font-semibold text-2xl md:text-4xl text-white p-5'>Generative AI</h1>
        <p className='font-normal text-base text-white mt-2 p-10'>Generative AI is a transformative field of artificial intelligence that creates new content by learning patterns from data. It powers innovations like text generation, image synthesis, and personalized applications. With tools like GPT and DALL·E, it drives advancements in creativity and automation. Generative AI is reshaping industries from entertainment to healthcare. Its potential lies in enabling smarter, more adaptive technologies for the future.</p>

       </div>
  
       <div>
      <Slider {...settings}>
      {genai.map((item)=>(
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

export default AIinsites
