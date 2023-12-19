import './styles/TodoItem.css'
function TodoItem(props){
    return (
      <li>
        <input type='checkbox' className={`Icon`}/>
        <p className={`TodoItemP ${props.completed ? "TodoItempP--complete" : ""}`}> { props.text }</p>
        <span className='Icon Icon-delete'>X</span>
      </li>
    );
  }
  

export { TodoItem };