// components/ServicesGrid.js

import Link from "next/link";
import Trash from "../icons/trash";

export default function ImagesGrid({ items = [], path="/", deleteButton=false, onDelete=()=>{} }) {
  return (
      <section className="m-auto w-full xl:w-[1320px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        
        {items.map((item, index) => (<div className="relative">

        {deleteButton && 
          <button onClick={(e)=>{e.stopPropagation(); onDelete(item.id);}} className="absolute top-0 right-0 z-1000 flex justify-center cursor-pointer w-10 h-10 bg-primary rounded-bl-2xl">
            <Trash className={"fill-light-red w-8 h-8"}/>
          </button>}

          <Link key={ index } href={ path + item.requestTitle + "/" }>
            <div className="relative group cursor-pointer overflow-hidden transition duration-300">
              {/* {console.log(item.thumb)} */}
              {/* Image Container */}
              <div className="overflow-hidden">
                <img
                  src={item.thumb}
                  alt={item.name}
                  className="w-full h-70 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-2xl font-primary-medium">
                  {item.name}
                </h2>
                <h2 className="text-lg font-primary-medium text-text-muted">
                  {"20-10-2026"}
                </h2>
              </div>


            </div>
          </Link>
          
              {/* timing */}
              {item.createdOn && (
                <div className="p-1 text-center">
                  <h2 className="text-sm text-light-red font-primary-medium">
                    Created on: {item.createdOn}
                  </h2>
                </div>
              )}
              {item.createdBy && (
                <div className="p-1 text-center">
                  <h2 className="text-sm text-light-red font-primary-medium">
                    Created by: {item.createdBy}
                  </h2>
                </div>
              )}
          </div>
        ))}

      </section>
  );
}