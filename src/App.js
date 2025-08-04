import { useState, useMemo } from 'react';
import './styles/App.scss';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/modal/MyModal';
import MyButton from './Components/UI/button/MyButton';

function App() {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: '', query: '' });

  const [modalActive, setModalActive] = useState();

  const sortedPost = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPost.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPost]);

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
        Введите необходимые данные для добавления поста:
      </h2>
      <MyModal visibleModal={modalActive} setVisibleModal={setModalActive}>
        <PostForm setVisibleModal={setModalActive} posts={posts} setPosts={setPosts} />
      </MyModal>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModalActive(true)}>
        Создать пользователя
      </MyButton>
      <PostForm posts={posts} setPosts={setPosts} />
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
    </div>
  );
}

export default App;
