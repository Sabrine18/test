import React from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'

const ExpenseItem = ({expense}) => {
    const {id,charge,amount} = expense
  return (
    <li>
  <div className='info'>
    <span className='expense'>{charge}</span>
      <span className='amount'>{amount}D</span>
       
      </div>
      <div>
        <button className='edit-btn' atia-label="edit button">
            <MdEdit />
        </button>
        <button className='clear-btn' atia-label="delete button">
            <MdDelete />
        </button>
      </div>
    </li>
  
  )
}

export default ExpenseItem
