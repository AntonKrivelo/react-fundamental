import React,{useState} from 'react';
import './styles/App.scss';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';


function App() {

  const [posts, setPosts] = useState([]);
 
  const [selectedSort, setSelectedSort] = useState('');

  const sortPost = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>Введите необходимые данные для добавления поста:</h2>
        <PostForm  posts={posts} setPosts={setPosts} />
        <hr style={{marginTop: '30px'}}></hr>
        <MySelect 
            value={selectedSort}
            onChange={sortPost}
            defaultValue="Сортировка" options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
        ]}/>
        {
          posts.length > 0 ? <PostList posts={posts} setPosts={setPosts} title='Постов 1' /> 
          : <h2 style={{textAlign: 'center', marginTop: '20px', fontSize: '35px'}}> Посты не найдены...  </h2> 
        }
    </div>
  );
}

export default App;
