import Post from './Components/Post';
import './styles/App.scss';
import React, {useState} from 'react';


function App() {

  const [posts, setPosts] = useState([
      {id:1, title:'JavaScript', description:'JavaScript - это язык программирования'}, 
      {id:2, title:'Css', description:'CSS - это язык программирования'},
      {id:3, title:'HTML', description:'HTML - это язык программирования'},
  ])

  return (
    
    <div className="App">
        {
          posts.map(post => 
           <Post post={post} key={post.id}/>
        )}
    </div>
  );
}

export default App;
