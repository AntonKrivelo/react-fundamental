import React,{useState} from 'react';
import './styles/App.scss';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';
import MyInput from './Components/UI/input/MyInput';


function App() {

  const [posts, setPosts] = useState([]);
 
  const [selectedSort, setSelectedSort] = useState('');

  const [searchQuery, setSearchQuery] = useState('');

  function getSortedPosts() {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPost = getSortedPosts()

  const sortPost = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <h2 style={{textAlign: 'center', marginTop: '20px'}}>Введите необходимые данные для добавления поста:</h2>
        <PostForm  posts={posts} setPosts={setPosts} />
        <hr style={{marginTop: '30px'}}></hr>
        <MyInput 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск..."/>
        <MySelect 
            value={selectedSort}
            onChange={sortPost}
            defaultValue="Сортировка" options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
        ]}/>
        {
          posts.length > 0 ? <PostList posts={sortedPost} setPosts={setPosts} title='Постов 1' /> 
          : <h2 style={{textAlign: 'center', marginTop: '20px', fontSize: '35px'}}> Посты не найдены...  </h2> 
        }
    </div>
  );
}

export default App;
