// import React from 'react';

// const accent = "#3B82F6"; // theme blue

// const techList = [
//   { name: "React.js", url: "https://dabeng.github.io/img/reactjs.png" },
//   { name: "Next.js", url: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" },
//   { name: "Tailwind CSS", url: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png" },
//   { name: "Node.js", url: "https://www.svgrepo.com/show/354119/nodejs-icon.svg" },
//   { name: "Flask", url: "https://external-preview.redd.it/n9EWl-GXdiaYYVOhB3Dy1hT69l0v8KfPnDVeqDQ6ANE.jpg?auto=webp&s=f0a553bd5925bada0c42a4af98c09e9e4acbc22b" },
//   { name: "Express.js", url: "https://tse1.mm.bing.net/th/id/OIP.igsTOJNvPT5roAeEEwUn7QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
//   { name: "MongoDB", url: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" },
//   { name: "Firebase", url: "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" },
//   { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png" },
//   { name: "ChromaDB", url: "https://miro.medium.com/v2/resize:fit:793/1*2crwn9fsu58hVQua-dEa3w.png" },
//   { name: "Pinecone", url: "https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/641e0cf34bb664fa0044863d_pinecone-fav.webp" },
//   { name: "TensorFlow", url: "https://editor.analyticsvidhya.com/uploads/22024tf.png" },
//   { name: "Langchain", url: "https://irislogic.com/wp-content/uploads/2024/04/Digital-Transformation-1.png" },
//   { name: "OpenAI", url: "https://static.vecteezy.com/system/resources/previews/022/227/365/original/openai-chatgpt-logo-icon-free-png.png" },
//   { name: "Gemini", url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" },
//   { name: "C", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png" },
//   { name: "Java", url: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" },
//   { name: "Python", url: "https://miro.medium.com/v2/resize:fit:1000/0*cOqooDOsnb8jDm2G.png" },
//   { name: "Flutter", url: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" },
// ];

// const Technologies = () => (
//   <section className="py-20 bg-white w-full">
//     <div className="max-w-7xl mx-auto px-4">
//       {/* Heading line*/}
//       <div className="flex items-center mb-8">
//         <h2 className="text-2xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">
//           Technologies
//         </h2>
//         <div className="flex-grow border-t border-[#e8ecf7]"></div>
//       </div>

//       {/* Tech icon grid */}
//       <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 md:gap-8 justify-items-center">
//         {techList.map((tech, i) => (
//           <div
//             key={tech.name + i}
//             className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-[#e8ecf7] p-4 hover:shadow-xl hover:border-[#3B82F6] transition-all duration-150 group"
//           >
//             <img
//               src={tech.url}
//               alt={tech.name}
//               className="w-14 h-14 lg:w-20 lg:h-20 object-contain mb-2 group-hover:scale-110 transition"
//               loading="lazy"
//             />
//             <span className="mt-1 text-xs md:text-sm font-semibold text-[#6c7583] group-hover:text-[#3B82F6] transition">
//               {tech.name}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// );

// export default Technologies;

'use client'
import React from "react";

const accent = "#3B82F6"; // theme blue

const techCategories = [
  {
    title: "Programming Languages",
    items: [
      { name: "C", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/500px-C_Programming_Language.svg.png" },
      { name: "Java", url: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png" },
      { name: "Python", url: "https://miro.medium.com/v2/resize:fit:1000/0*cOqooDOsnb8jDm2G.png" },
    ],
  },
  {
    title: "Frontend & UI",
    items: [
      { name: "React.js", url: "https://dabeng.github.io/img/reactjs.png" },
      { name: "Next.js", url: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png" },
      { name: "Tailwind CSS", url: "https://codekitapp.com/images/help/free-tailwind-icon@2x.png" },
      { name: "Flutter", url: "https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png" },
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      { name: "Node.js", url: "https://www.svgrepo.com/show/354119/nodejs-icon.svg" },
      { name: "Express.js", url: "https://tse1.mm.bing.net/th/id/OIP.igsTOJNvPT5roAeEEwUn7QAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" },
      { name: "Flask", url: "https://external-preview.redd.it/n9EWl-GXdiaYYVOhB3Dy1hT69l0v8KfPnDVeqDQ6ANE.jpg?auto=webp&s=f0a553bd5925bada0c42a4af98c09e9e4acbc22b" },
    ],
  },
  {
    title: "Databases & Vector Stores",
    items: [
      { name: "MongoDB", url: "https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png" },
      { name: "PostgreSQL", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png" },
      { name: "Firebase", url: "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png" },
      { name: "ChromaDB", url: "https://miro.medium.com/v2/resize:fit:793/1*2crwn9fsu58hVQua-dEa3w.png" },
      { name: "Pinecone", url: "https://cdn.prod.website-files.com/63daf1fa1abcbc5e7969d7c9/641e0cf34bb664fa0044863d_pinecone-fav.webp" },
    ],
  },
  {
    title: "AI & Generative AI",
    items: [
      { name: "TensorFlow", url: "https://editor.analyticsvidhya.com/uploads/22024tf.png" },
      { name: "LangChain", url: "https://irislogic.com/wp-content/uploads/2024/04/Digital-Transformation-1.png" },
      { name: "OpenAI", url: "https://static.vecteezy.com/system/resources/previews/022/227/365/original/openai-chatgpt-logo-icon-free-png.png" },
      { name: "Gemini", url: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-gemini-icon.png" },
    ],
  },
];

const Technologies = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#21242B] tracking-wide mr-3">
            Technologies
          </h2>
          <div className="flex-grow border-t border-[#e8ecf7]" />
        </div>

        {/* Categories */}
        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl md:text-2xl font-semibold text-[#21242B] mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5 md:gap-8">
                {category.items.map((tech, i) => (
                  <div
                    key={tech.name + i}
                    className="flex flex-col items-center bg-white rounded-2xl shadow-md border border-[#e8ecf7] p-4 hover:shadow-xl hover:border-[#3B82F6] transition-all duration-150 group"
                  >
                    <img
                      src={tech.url}
                      alt={tech.name}
                      className="w-14 h-14 lg:w-20 lg:h-20 object-contain mb-2 group-hover:scale-110 transition"
                      loading="lazy"
                    />
                    <span className="mt-1 text-xs md:text-sm font-semibold text-[#6c7583] group-hover:text-[#3B82F6] transition text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
