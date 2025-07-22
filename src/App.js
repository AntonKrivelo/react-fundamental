import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import React,{useState} from 'react';
import './styles/App.scss';


function App() {

  const [posts, setPosts] = useState([]);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Math.floor(Math.random() * 100),
      title,
      description,
    } 
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
  }

  return (
    <div className="App">
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>Введите необходимые данные для добавления поста:</h2>
      <form>
        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Заголовок поста" />
        <MyInput value={description} onChange={e => setDescription(e.target.value)} type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
        <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
