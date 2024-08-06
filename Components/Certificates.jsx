import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Certificate = ({ imageUrl, title, description, tags}) => {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row m-5 bg-[#1C1F26]">
      <div className="h-full w-full md:h-[200px] md:w-[400px]">
        <Image
          src={imageUrl}
          alt="Card Image"
          className="h-full w-full rounded-md p-2"
          height={200}
          width={500}
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold text-white">
            {title}
          </h1>
          <p className="mt-3 text-sm text-[#A8B3CF]">
            {description}
          </p>
          <div className="mt-4">
            {tags.map((tag, index) => (
              <span key={index} className="m-2 inline-block rounded-full bg-gray-100 p-2 text-lg text-gray-900">
                  {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
