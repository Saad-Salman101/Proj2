import React from 'react'
import { useSelector} from 'react-redux';
import P10Home from './P10Home';
import P10Field from './P10Field'
import P10Form from './P10Form';
import P10Form2 from './P10Form2';
import P10Form3 from './P10Form3';
import P10Submitted from './P10Submitted';
import P10SupportState from './P10SupportState';
const Main = () => {

    let {c} = useSelector((state)=>state.custom)
  
if (c==0){
  return (
    <>
      <P10Home />
    </>
  )}

else if(c==1){
    return(
        <>
        <P10Field/>
        </>
    )
}

else if(c==2){
    return(
        <>
        <P10Form/>
        </>
    )
}
else if(c==3){
  return(
      <>
      <P10Form2/>
      </>
  )
}
else if(c==4){
  return(
      <>
      <P10Form3/>
      </>
  )
}

else if(c==5){
  return(
      <>
      <P10Submitted/>
      </>
  )
}

else if(c==6){
  return(
      <>
      <P10SupportState/>
      </>
  )
}

else {
    return (
      <>
        <P10Home />
      </>
    )}

}

export default Main
