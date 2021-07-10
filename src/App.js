
import './App.css';
import Navbar from './components/NavBar/NavBar'
import { Route, Redirect } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ListCocktail from './components/ListCocktail/ListCocktail';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import DescCocktail from './components/DescCocktail/DescCocktail';
import { ThemeContext, themes } from '../src/theme';

const ThemeContextProvider = ThemeContext.Provider;
export const ThemeContextConsumer = ThemeContext.Consumer;

function App() {
  const [text, setText] = useState("");
  const [letter, setLetter] = useState("a");
  const [count, setCount] = useState(0);
  const [arrId, setArrId] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [theme, settheme] = useState(themes.light);

  return (
    <ThemeContextProvider value={theme}>
      <div>
        <Navbar
          setText={setText}
          isOpen={isOpen}
          setOpen={setOpen}
          setCount={setCount}
          count={count}
          arr={arrId}
          setArrId={setArrId}

          themes={themes}
          theme={theme}
          settheme={settheme}
        />
        <div>
          <Route path="/home" render={() =>
            <HomePage
              setCount={setCount}
              setArrId={setArrId}
              count={count}
              isOpen={isOpen}
            />} />
          <Route path="/list/cocktails/:slug" render={() =>
            <ListCocktail
              letter={letter}
              setLetter={setLetter}
              text={text}
              setCount={setCount}
              setArrId={setArrId}
              count={count}
              isOpen={isOpen}
              arrId={arrId}
            />} />
          <Route path="/description/cocktail/:slug" render={() =>
            <DescCocktail
              setCount={setCount}
              setArrId={setArrId}
              count={count}
            />} />
          <Route path="/about">
            <Redirect to="/home" />
          </Route>
        </div>
        <Footer setLetter={setLetter} />
      </div>
    </ThemeContextProvider>
  );
}
export default App;
