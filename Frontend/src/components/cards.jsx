import React from "react";
function Cards({item}){
    return (
     <>
        <div className="mt-4 my-3 p-3">
           <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border">
            <figure>
                <img
                src={item.image}
                alt="card image" />
            </figure>
            <div className="card-body p-3">
                <h2 className="card-title font-normal text-[#BCB88A]">{item.title}</h2>
                <p className="font-normal  text-white">{item.description}</p>
                <div className="card-actions justify-end">
                <p className="font-normal text-base text-[#BCB88A]">{item.certificate}</p>
                <a  href={item.link}><button className="bg-white text-[#011f4b] font-bold px-3 py-2 rounded-md hover:bg-slate-800 duration-300 mt-3">View</button>
                </a>
                </div>
            </div>
            </div>
        </div>
     </>
    )
}
export default Cards;