import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { dota_heroes } from './data/herodata';
import Header from './components/Header';
import Search from './components/Search';
import HeroGrid from './components/heroes/HeroGrid';
import HeroPage from './components/heroes/HeroPage';
import Error404 from './components/Error404';
import './App.css';

const App = () => {
  const [heroes, setHeroes] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const baseURL = 'https://api.opendota.com/api/heroStats';

  useEffect(() => {
    const fetchHeroes = async () => {
      const response = await axios(`${baseURL}`);
      const heroesList = response.data;

      // map thru the data returned from OpenDota and check to see if the hero matches the name in the extra data array
      // if it does, add the correct value to the new description property on each object

      heroesList.map((hero) => {
        dota_heroes.map((image) =>
          hero.localized_name === image.dotaName
            ? (hero.description = image.description)
            : 'null'
        );
      });

      // sort heroes by object property

      function sortByProp(property) {
        return (a, b) => {
          return a[property].localeCompare(b[property]);
        };
      }

      const sortedHeroes = heroesList.sort(sortByProp('localized_name'));

      // set new hooks state
      setHeroes(sortedHeroes);
      setLoading(false);

      // console.log(heroesList);
    };
    fetchHeroes();
  }, []);

  // search functionality

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
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <>
              <Search setSearch={setSearch} search={search} />
              <HeroGrid
                filteredHeroes={filteredHeroes}
                loading={loading}
                setSearch={setSearch}
              />
            </>
          )}
        />
        <Route
          path='/:heroName'
          render={() => <HeroPage filteredHeroes={filteredHeroes} />}
        />
        <Route component={Error404} />
      </Switch>
    </AppContainer>
  );
};

const AppContainer = styled(Container)`
  max-width: 90vw;
`;

export default App;
