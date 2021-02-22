import React from 'react';

function TechItem({ tech }) {
  return (
    <li key={tech}>
      {tech}
      <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
    </li>
  );
}

export default TechItem;