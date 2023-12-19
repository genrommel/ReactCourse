import './styles/CreateTodoButton.css'
function CreateTodoButton(){
    return (
        <button onClick={(event) => {
            console.log('Get click')
            console.log(event.target)
        }}> 
            + 
        </button>
    );
}

export { CreateTodoButton }