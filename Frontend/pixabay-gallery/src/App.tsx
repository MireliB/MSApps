import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setPhotos, setPage, setCategory } from './reducer/photoSlice';
import axios from 'axios';
import './App.css';

function App() {

  const dispatch = useDispatch();

  const { items, category, page } = useSelector((state: RootState) => state.photos);

  const [modalPhoto, setModalPhoto] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const categories = ['sports', 'nature', 'animals', 'work', 'technology', 'food'];

  const fetchPhotos = async () => {
    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:4000/api/photos?category=${category}&page=${page}`);
      dispatch(setPhotos(response.data));

    } catch (err) {
      console.error('Failed to fetch photos: ', err);

    } finally {
      setLoading(false);
    }
  }

  const handlePreviousPageChange = () => {
    dispatch(setPage(page - 1));
  }

  const handleNextPageChange = () => {
    dispatch(setPage(page + 1));
  }
  const handleCategoryChange = (e: any) => {
    dispatch(setCategory(e.target.value))
  }

  useEffect(() => {
    fetchPhotos();
  }, [category, page]);

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={handlePreviousPageChange} disabled={page <= 1}>Prev</button>

        <select
          className='category-select'
          value={category}
          onChange={handleCategoryChange}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>


        <button onClick={handleNextPageChange}>Next</button>

      </div>

      {loading ? (
        <div className="spinner"></div>
      ) : items.length === 0 ? (
        <p>No results found for "{category}"</p>
      ) : (
        <div className="grid">
          {items.map((item) => (
            <img
              key={item.id}
              src={item.webformatURL}
              alt=""
              onClick={() => setModalPhoto(item)}
            />
          ))}
        </div>
      )}


      {modalPhoto && (
        <div className="modal" onClick={() => setModalPhoto(null)}>
          <div className="modal-content">
            <p>Views: {modalPhoto.views}</p>
            <p>Downloads: {modalPhoto.downloads}</p>
            <p>Collections: {modalPhoto.collections}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
