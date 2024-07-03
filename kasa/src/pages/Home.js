import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';
import '../styles/Home.scss';

const Home = () => {
  return (
    <main>
      <Banner text="Chez vous, partout et ailleurs" />
      <div className="logements">
        {logements.map((logement) => (
          <Card key={logement.id} title={logement.title}  cover = {logement.cover} />
        ))}
      </div>
    </main>
  );
};

export default Home;
