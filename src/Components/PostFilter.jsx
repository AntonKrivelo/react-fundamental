import React from 'react'
import MySelect from '../Components/UI/select/MySelect';
import MyInput from '../Components/UI/input/MyInput';


const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput 
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск..."/>
        <MySelect 
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defaultValue="Сортировка" options={[
            {value: 'title', name: 'По названию'},
            {value: 'description', name: 'По описанию'}
        ]}/>
    </div>
  )
}

export default PostFilter;
