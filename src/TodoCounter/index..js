 import React from "react"
 import './TodoCounter.css'
 function TodoCounter ({completed, total}){
     return (
         
      <h2 className="TodoCounter">Has completado {completed} de {total} tareas</h2>
 
     )
 }

 export { TodoCounter }
