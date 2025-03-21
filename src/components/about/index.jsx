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
          Hi! I&apos;m <strong>Eeshani Jha</strong>, a <strong>final-year B.Tech student at NIT Rourkela</strong>, 
          passionate about <strong>software development, UI/UX design, and artificial intelligence</strong>.
          With expertise in <strong>React, Next.js, Django, and AI-driven solutions</strong>, I have built multiple 
          projects, including <strong>AI-powered applications and full-stack web platforms</strong>.
        </p>

        <p className="text-white font-light text-sm sm:text-base md:text-lg mt-3">
          Previously, I interned at <strong>Fractal Analytics</strong>, where I worked on 
          <strong> Gen-AI projects, optimizing large language models (LLMs) with Microsoft Azure</strong>. 
          I enjoy solving complex problems and developing scalable, efficient, and user-friendly applications.
        </p>
      </div>
    </section>
  );
};

export default AboutDetails;
