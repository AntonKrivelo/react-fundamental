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
        {
          posts.length > 0 ? <PostList posts={posts} setPosts={setPosts} title="Список постов 1"/> 
          : <h2 style={{textAlign: 'center', marginTop: '20px', fontSize: '35px'}}> Нет постов...  </h2> 
         
        }
    </div>
  );
}

export default App;
