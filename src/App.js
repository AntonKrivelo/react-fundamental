import { useState, useEffect } from 'react';
import axios from 'axios';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';
import './styles/App.scss';
import { usePosts } from './Components/hooks/usePosts';
import Loader from './Components/UI/loader/Loader';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modalActive, setModalActive] = useState();

  const [isPostsLoading, setIsPostsLoading] = useState(false);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const responce = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(responce.data);
      setIsPostsLoading(false);
    }, 2000);
  }

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Введите необходимые данные для добавления поста:
      </h2>
      <MyModal visibleModal={modalActive} setVisibleModal={setModalActive}>
        <PostForm setVisibleModal={setModalActive} posts={posts} setPosts={setPosts} />
      </MyModal>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModalActive(true)}>
        Создать пост
      </MyButton>
      <hr style={{ marginTop: '30px' }}></hr>
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchPosts.length > 0 ? (
        <PostList posts={sortedAndSearchPosts} setPosts={setPosts} title={null} />
      ) : (
        <h2 style={{ textAlign: 'center', marginTop: '20px', fontSize: '35px' }}>
          {' '}
          Посты не найдены...{' '}
        </h2>
      )}
      {isPostsLoading ? (
        <div className="loader-block">
          <Loader />
        </div>
      ) : (
        <PostList posts={sortedAndSearchPosts} setPosts={setPosts} title={null} />
      )}
    </div>
  );
}

export default App;
