import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


function SkillCard({ title, level }) {
  return (
    <div className="border p-4 rounded-lg">
      <p className="font-bold text-lg mb-2"><FontAwesomeIcon icon={faCheck} /> {title}</p>
      <p>{level}</p>
    </div>
  );
}

export default SkillCard;
