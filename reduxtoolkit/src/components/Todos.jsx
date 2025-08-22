import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoslice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    

  return (
<>
  {/* Page Wrapper with gradient background */}
  <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-10 px-4">
    
    {/* Card container */}
    <div className="bg-white shadow-xl rounded-2xl w-full max-w-lg p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 tracking-wide">
        ✅ My Todos
      </h1>

      {/* Check if todos exist */}
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos yet. Add one above!</p>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg transition-transform"
            >
              <div className="text-white font-medium">{todo.text}</div>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg shadow-sm transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
</>


  )  
}

export default Todos
