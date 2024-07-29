import { ReactElement, useState } from "react"

const useMultistepForms = (steps:ReactElement[]) => {
  const[currentIndex,setCurrentIndex]=useState(0)

  function next(){
     setCurrentIndex(i =>{
      if(i>=steps.length-1) return i
       return i+1
     })
  }

  function back(){
    setCurrentIndex(i=>{
      if(i<=0)return i
      return i-1
    })
  }

  function goTo(index:number){
       setCurrentIndex(index)
  }
  return {
   currentIndex,
   steps,
   step:steps[currentIndex],
   isFirstStep:currentIndex ===0,
   isLastStep:currentIndex ===steps.length-1,
   goTo,next,back,

  }
}

export default useMultistepForms