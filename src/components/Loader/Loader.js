import React from 'react'
import classes from './Loader.module.scss'

export const Loader = () => (
  <div className={classes.Loader}>
    <div className={classes.inner}><div /><div /><div /></div>
  </div>
)