import React from "react";

const AboutDetails = () => {
  return (
    <section className="py-10 w-full flex flex-col items-center justify-center">
      {/* Yellow Border Box */}
      <div className="border-4 border-yellow-400 p-6 rounded-lg max-w-3xl text-center bg-black/40 shadow-lg">
        <h2 className="text-2xl md:text-3xl text-yellow-400 font-bold">
          Eeshani Jha
        </h2>
        
        <p className="text-white font-light text-sm sm:text-base md:text-lg mt-3">
          Hi! I'm **Eeshani Jha**, a **final-year B.Tech student at NIT Rourkela**, passionate about **software development, UI/UX design, and artificial intelligence**. 
          With expertise in **React, Next.js, Django, and AI-driven solutions**, I have built multiple projects, including **AI-powered applications and full-stack web platforms**.
          <br /><br />
          Previously, I interned at **Fractal Analytics**, where I worked on **Gen-AI projects, optimizing large language models (LLMs) with Microsoft Azure**. 
          I enjoy solving complex problems and developing scalable, efficient, and user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default AboutDetails;
