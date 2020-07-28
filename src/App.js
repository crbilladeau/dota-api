import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './components/Header';
import HeroGrid from './components/heroes/HeroGrid';
import Search from './components/Search';
import Container from 'react-bootstrap/Container';
import { images } from './images/imagedata';
import './App.css';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const url = 'https://api.opendota.com/api/heroes';

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await axios(`${url}`);
      const heroesList = response.data;

      // map thru the data returned from OpenDota and check to see if the hero matches the name in the images array
      // if it does, add the correct value to the new image property on each object

      heroesList.map((hero) => {
        images.map((image) =>
          hero.localized_name === image.dotaName
            ? (hero.url = image.url)
            : 'null'
        );
      });

      // alphabetically sort heroes by object property
      // TODO: Make this more unique

      function alphabeticalSort(property) {
        return (a, b) => {
          return a[property].localeCompare(b[property]);
        };
      }

      const sortedHeroes = heroesList.sort(alphabeticalSort('localized_name'));

      // set new hooks state
      setHeroes(sortedHeroes);
      setLoading(false);

      // console.log(heroesList);
    };
    fetchHeroes();
  }, []);

  useEffect(() => {
    setFilteredHeroes(
      heroes.filter((hero) =>
        hero.localized_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, heroes]);

  return (
    <AppContainer className='mx-auto'>
      <Header />
      <Search setSearch={setSearch} search={search} />
      <HeroGrid loading={loading} filteredHeroes={filteredHeroes} />
    </AppContainer>
  );
};

const AppContainer = styled(Container)`
  max-width: 75vw;
`;

export default App;
