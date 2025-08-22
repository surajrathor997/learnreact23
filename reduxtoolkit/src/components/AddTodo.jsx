import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoslice'


function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
    


  return (
  <form
  onSubmit={addTodoHandler}
  className="flex items-center justify-center gap-3 mt-10 bg-white p-6 rounded-2xl shadow-xl w-full max-w-lg mx-auto"
>
  <input
    type="text"
    placeholder="✍️ Write a new todo..."
    className="flex-1 border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none px-4 py-2 rounded-xl shadow-sm transition duration-300 ease-in-out hover:shadow-md"
    value={input}
    onChange={(e) => setInput(e.target.value)}
  />
  <button
    type="submit"
    className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 active:scale-95 text-white px-6 py-2 rounded-xl shadow-md font-medium transition-all duration-300 ease-in-out"
  >
    ➕ Add
  </button>
</form>

  )
}

export default AddTodo
