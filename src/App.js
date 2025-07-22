import React,{useState} from 'react';
import './styles/App.scss';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';


function App() {

  const [posts, setPosts] = useState([]);
  
  return (
    <div className="App">
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>Введите необходимые данные для добавления поста:</h2>
        <PostForm  posts={posts} setPosts={setPosts} />
        <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
