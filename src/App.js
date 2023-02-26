import React, { Fragment, useEffect, useState } from 'react';
import BookCreate from './components/books/BookCreate';
import BookList from './components/books/BookList';
import { useBooksContext } from './hooks/use-books-context';
import DropDownPage from './pages/DropDownPage';
import AccordionPage from './pages/AccordionPage';
import ButtonsPage from './pages/ButtonsPage';
import Sidebar from './components/Sidebar';
import useNavigate from './hooks/use-navigate-context';
import Route from './components/Route';
import ModalPage from './pages/ModalPage';
import TablePage from './pages/TablePage';
import CounterPage from './pages/CounterPage';
import HoverCounter from './components/HoverCounter';
import ClickIncrease from './components/counters/ClickIncrease';
import HoverIncrease from './components/counters/HoverIncrease';
import CounterPage2 from './pages/CounterPage2';

const App = () => {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <Fragment>
      <Sidebar />
      <div className="app">
        <Route path={'/'}>
          <DropDownPage />
        </Route>
        <Route path={'/accordion'}>
          <AccordionPage />
        </Route>
        <Route path={'/buttons'}>
          <ButtonsPage />
        </Route>
        <Route path={'/modal'}>
          <ModalPage />
        </Route>
        <Route path={'/table'}>
          <TablePage />
          <CounterPage2 />
        </Route>
        <Route path={'/counter'}>
          <CounterPage initialCount={1} />
          <ClickIncrease appValue="This is ClickIncrease Com" />
          <HoverIncrease appValue="This is HoverIncrease Com" />
        </Route>

        {/* {currentPath === '/dropdown' && <DropDownPage />}
        {currentPath === '/accordion' && <AccordionPage />}
        {currentPath === '/buttons' && <ButtonsPage />} */}
        {/* <h1>Reading List</h1>
        <BookList />
        <BookCreate /> */}
      </div>
    </Fragment>
  );
};

export default App;

// import './App.css';
// import React, { useState } from 'react';
// import AnimalShow from './components/AnimalShow';
// import 'bulma/css/bulma.min.css';
// import SearchBar from './components/unsplash/SearchBar';
// import ImageList from './components/unsplash/ImageList';
// import { searchImages } from './api';

// function getRandomAnimal() {
//   const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
//   return animals[Math.floor(Math.random() * animals.length)];
// }

// const App = () => {
//   const [images, setImages] = useState([]);

//   const [animals, setAnimals] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleClick = () => {
//     setAnimals(prev => [...prev, getRandomAnimal()]);
//   };

//   const renderedAnimals = animals?.map((animal, index) => {
//     return <AnimalShow key={index} type={animal} />;
//   });

//   const handleSubmit = async term => {
//     console.log('Search about: ', term);
//     const response = await searchImages(term);
//     setImages(response);
//   };

//   return (
//     <div>
//       <div className="hero is-primary">
//         <div className="hero-body">
//           <p className="title">Personal React Development</p>
//         </div>
//       </div>
//       <SearchBar onSubmit={handleSubmit} setSearchTerm={setSearchTerm} />
//       <ImageList images={images} />
//       <div className="app">
//         <button onClick={handleClick}>Add Animal</button>
//         <div className="animal-list">{renderedAnimals}</div>
//       </div>
//     </div>
//   );
// };
// export default App;

/* <div>
        <input type="text" placeholder="" list={['SDM']} max={100} min={1} />
        <datalist id="names">
          <option value="Edge" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist>
      </div> */
