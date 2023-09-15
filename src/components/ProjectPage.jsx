import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsPage() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Deskripsi proyek pertama.',
      imageUrl: 'https://example.com/project1.jpg',
      websiteUrl: 'https://example.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Deskripsi proyek kedua.',
      imageUrl: 'https://example.com/project2.jpg',
      websiteUrl: 'https://example.com/project2',
    },
    // Tambahkan proyek-proyek lain di sini
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default ProjectsPage;
