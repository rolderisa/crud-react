import React, { useRef, useState } from 'react'
import './crud.css'

function Crud() {
    const list=[
        {
        id:1,
        name:"HP",
        price:"2222"
    },
    {
        id:2,
        name:"Dell",
        price:"2220"
    }
    ]
    const [lists,setList]=useState(list)
    const [updateState,setUpdateState]=useState(-1)
  
  return (
    <div className='crud'>
      <div>
      <AddList setList={setList} />
      <form onSubmit={handleEdit}>
      <table>
        {
            lists.map((current)=>(
              updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                <tr>
                <td>{current.name}</td>
                <td>{current.price}</td>
                <td>
                  <button className='edit' onClick={()=>handleSubmit(current.id)}>Edit</button>
                </td>
                </tr>
            ))
        }
      </table>
      </form>
      </div>
    </div>
  )
  function handleEdit(id){
    setUpdateState(id)

  }
  function handleSubmit(event){

    event.preventDefault();

    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
const newList =lists.map((li)=>(
li.id === updateState ? {...li,name:name,price:price} :li
))
setList(newList)
setUpdateState(-1)
}

}

function EditList({current,lists,setList}){
  function handleInput(event){
    const name=event.target.name;
    const value = name.value;
 const newlist=   lists.map((li)=>(
      li.id === current.id ? {...li, name:value} :li
 ))
    setList(newlist)
   
  }
  return(
    <tr>
    <td><input type='text' onClick={handleInput} name='name' value={current.name}  /></td>
    <td><input type='text' name='price' value={current.price} /></td>
    <td><button type='submit'>Update</button></td>
    </tr>
  )
  }
function AddList({setList}){
  const nameRef=useRef()
  const priceRef=useRef()
  function handleSubmit(event){
    event.preventDefault();

    const name = event.target.elements.name.value;
    const price = event.target.elements.name.price;
    const newList={
      id:3,
      name,
      price
    }
    setList((prevList)=>{
      return prevList.concat(newList)

    })
    nameRef.current.value = ""
    priceRef.current.value =""
  }
  return(
    <form className='addForm' onSubmit={handleSubmit}>
      <input type="text" name='name' placeholder='Enter Name' ref={nameRef}/>
      <input type='text' name='price '  placeholder='Enter price' ref={priceRef} />
      <button type='submit'>Add</button>
    </form>
  )
}
export default Crud