import React from 'react';
import { useParams } from 'react-router-dom';

const Logement = () => {
  const { id } = useParams();
  console.log('Logement component rendered with id:', id);
  return (
    <div>
      <h1>Fiche Logement</h1>
      <p>Affichage du logement avec l'ID : {id}</p>
    </div>
  );
};

export default Logement;
