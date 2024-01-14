import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import Images from './components/Images';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');  
  const [image, setImage] = useState('');

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.urls.full);
        setImage(data.urls.full);
      })
      .catch((err) => {
        console.log(err);
      })
    setWord('');
  }


  return (
    <div className="App">
      <Header title="Images Gallery" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
      <Images image={image}/>
    </div>
  );
}

export default App;
