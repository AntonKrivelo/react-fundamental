import React,{useState, useMemo} from 'react';
import './styles/App.scss';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';
import MyInput from './Components/UI/input/MyInput';


function App() {

  const [posts, setPosts] = useState([]);
 
  const [selectedSort, setSelectedSort] = useState('');

  const [searchQuery, setSearchQuery] = useState('');


  const sortedPost = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPost])

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
          sortedAndSearchPosts.length > 0 ? <PostList posts={sortedAndSearchPosts} setPosts={setPosts} title='Постов 1' /> 
          : <h2 style={{textAlign: 'center', marginTop: '20px', fontSize: '35px'}}> Посты не найдены...  </h2> 
        }
    </div>
  );
}

export default App;
