import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import React,{useState, useRef} from 'react';
import './styles/App.scss';


function App() {

  const bodyInputRef = useRef()
  
  const [posts, setPosts] = useState([
      {id:1, title:'JavaScript', description:'JavaScript - это язык программирования'}, 
      {id:2, title:'Css', description:'CSS - это язык программирования'},
      {id:3, title:'HTML', description:'HTML - это язык программирования'},
  ])
  
  const [title, setTitle] = useState('sadsad')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
        <MyInput value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Заголовок поста" />
        <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
        <PostList posts={posts} title="Список постов 1"/>
    </div>
  );
}

export default App;
