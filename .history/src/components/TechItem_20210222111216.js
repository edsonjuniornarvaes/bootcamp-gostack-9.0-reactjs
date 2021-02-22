import React from 'react';

function TechItem() {
  return (
    <li key={tech}>
    {tech}
    <button onClick={() => this.handleDelete(tech)} type="button">Remover</button>
  </li>
  );
}

export dafult TechItem;