// import React from 'react'
import AccountForm from "./AccountForm"
import AddressForm from "./AddressForm"
import useMultistepForms from "./useMultistepForms"
import UserForm from "./UserForm"

const App = () => {
  const{steps,currentIndex,step,isFirstStep,back,next,isLastStep}=useMultistepForms([
    <UserForm/>,<AddressForm/>,<AccountForm/>])
  return (
    <div
     style={{
      position:"relative",
      background:"White",
      border:'1px solid black',
      padding:"2rem",
      margin:'1rem',
      borderRadius:'.5rem',
      fontFamily:'Verdana',
     }}
    >
      <form>
          <div
            style={{position:'absolute',top:'.5rem',right:'.5rem'}}>
              {currentIndex+1}/{steps.length}
            </div>
            {step}
            <div
            style={{
              marginTop:"1rem",
              display:"flex",
              gap:".5rem",
              justifyContent:"flex-end",
            }}
            >
              {!isFirstStep && <button type="button" onClick={back}>
                Back
                </button>}
              <button type="button" onClick={next}>
                {isLastStep?"Finish":"Next"}
                </button>

            </div>
      </form>
    </div>
  )
}

export default App