import React from 'react';

function ProjectCard({ title, description, imageUrl, websiteUrl }) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 mt-2 h-full">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-white hover:underline w-max bg-black p-2 rounded-xl"
      >
        Visit Website
      </a>
    </div>
  );
}

export default ProjectCard;
