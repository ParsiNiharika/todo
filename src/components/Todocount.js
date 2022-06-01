function Todocount(props) {
    return ( 
        <div>
            <div>
            <p className='display-4 text-danger text-center'>
                TODO COUNT
            </p>
        </div> 
        <h1 className="text-secondary text-center">{props.todolist.length}</h1>
        </div>
     );
}

export default Todocount;