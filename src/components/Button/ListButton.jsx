import React from 'react'
import styles from './ListButton.module.css'

const ListButton = (props) => {
  if(!props.isSelected){
    return (<button className={`${styles.btn_container}`}  onClick={props.onClick}>
            {props.text}
        </button>)
  }
  else {
    return (
      <button className={`${styles.btn_container2}`}  onClick={props.onClick}>
            {props.text}
        </button>
    )
  }
}

export default ListButton