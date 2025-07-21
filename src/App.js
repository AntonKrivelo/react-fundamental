import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import './styles/App.scss';


function App() {

  const addNewPost = () => {
    
  }

  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Заголовок поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost} disabled>Создать пост</MyButton>
      </form>
        <PostList title="Список постов 1"/>
    </div>
  );
}

export default App;
