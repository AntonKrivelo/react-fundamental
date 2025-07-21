import React from 'react';
import classes from './MyInput.module.scss';


const MyInput = (props) => {
  return (
    <input className={classes.input} type="text" {...props} />
  )
}

export default MyInput;
