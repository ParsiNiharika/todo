function Todolist(props) {
    return ( 
        <div>
            <div>
            <p className='display-4 text-warning text-center'>
                 TODO LIST
            </p>
        </div> 
        <div className='text-center'>
                {
                    props.todolist.map((todo,index)=><h1 key={index}>{todo}</h1>)
                }
            </div>
        </div>
     );
}

export default Todolist;