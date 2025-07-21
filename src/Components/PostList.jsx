import React,{useState} from 'react'
import Post from './Post'


const PostList = (props) => {

  const [posts, setPosts] = useState([
      {id:1, title:'JavaScript', description:'JavaScript - это язык программирования'}, 
      {id:2, title:'Css', description:'CSS - это язык программирования'},
      {id:3, title:'HTML', description:'HTML - это язык программирования'},
  ])

  return (
    <div>
       <h1 style={{textAlign: 'center'}}>{props.title}</h1>
        {
          posts.map(post => 
           <Post post={post} key={post.id}/>
        )}
    </div>
  )
}

export default PostList
