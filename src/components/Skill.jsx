import React from "react";

const Skill = () => {
  const skills = [
    { name: "HTML", url: "https://www.cdnlogo.com/logos/h/84/html.svg", alt: "HTML Logo" },
    { name: "CSS", url: "https://www.cdnlogo.com/logos/c/18/css.svg", alt: "CSS Logo" },
    { name: "JavaScript", url: "https://www.cdnlogo.com/logos/j/44/javascript.svg", alt: "JavaScript Logo" },
    { name: "React", url: "https://www.cdnlogo.com/logos/r/63/react.svg", alt: "React Logo" },
    { name: "Tailwind CSS", url: "https://www.cdnlogo.com/logos/t/58/tailwind-css.svg", alt: "Tailwind CSS Logo" }
  ];

  return (
    <main className="container mx-auto">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-center mb-4">Get To Know My Skills</h1>
      </div>

      <div className="flex justify-center items-center gap-2">
        {skills.map((skill) => (
            <div className="m-1">
          <a href="https://github.com/BaldiMaulana" target="_blank" rel="noopener noreferrer" key={skill.name}> {/* Replace "#" with actual skill link if needed */}
            <img src={skill.url} alt={skill.alt} className="w-full h-20 object-contain" />
            <p className="text-center text-sm font-semibold mt-2">{skill.name}</p>
          </a>
      </div>
        ))}
      </div>
    </main>
  );
};

export default Skill;
