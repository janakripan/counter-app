import { useEffect, useReducer } from 'react'



const reducer = (state, action) =>{
  
  switch (action.type){
    
    
    case 'increment':{
      const newCount = state.count + 1
      const hasError = newCount>100
      
      return{...state ,
         count:hasError? state.count: newCount,
         error: hasError? "Maximum reached" : null,
        

       }
     
    }
    case 'decrement':{
      const newCount = state.count - 1
      const hasError = newCount<0
      
      return{...state ,
         count:hasError? state.count: newCount,
         error: hasError? "Minimum reached" : null,
         


       }
    }
    default:
      return state
  }
  
  
  
}









function App() {
  const [state, dispatch] = useReducer(reducer , {
    count: 0 ,
    error : null ,
    message: null,

  })

  useEffect(()=>{
    if (state.count === 0) return
    if(state.count % 2 === 0 ){
     alert("number is even");
   } 
   
   },[state.count] )

 
   
  

  return (
    <>
     <div className='w-full h-screen flex items-center justify-center'>

      <div className='w-fit h-fit flex flex-col items-center justify-center'>

        <div className='w-16 h-8 flex items-center justify-center rounded-lg border-2 mb-8'>{state.count}</div>
        
        {state.error&&(<div className="w-fit mb-3 text-red-500">{state.error}</div>)}

        <div className='flex flex-row gap-x-2 '>
          <button className='px-5 py-2 bg-blue-400 rounded-lg text-white'
                onClick={()=>dispatch({type : 'decrement'} )}
          > decrement</button>
          <button className='px-5 py-2 bg-blue-400 rounded-lg text-white'
                onClick={()=>dispatch({type : 'increment'}) }
          > increment</button>
        </div>
        
      </div>

     </div>
    </>
  )
  
}

export default App

    

