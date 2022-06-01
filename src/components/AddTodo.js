
import {useForm} from 'react-hook-form'
function AddTodo(props) {

    let {register,handleSubmit,formState:{errors}}=useForm()
   
    
    const onFormSubmit=(todoObj)=>{
        props.setTodoList([...props.todolist,todoObj.newtodo])
     }
    
    return ( 
        <div>
            <p className='display-4 text-info text-center'>
                ADD TODO
            </p>
            <form className='w-75 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="todo">New Todo</label>
                    <input type="text" id="todo" className='form-control' {...register("newtodo")}/>
                </div>
                <button type="submit" className='btn btn-success mx-auto d-block'>Add Item</button>
            </form>
            
            
        </div>
     );
}

export default AddTodo;