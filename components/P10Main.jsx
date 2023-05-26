import React from 'react'
import { useSelector} from 'react-redux';
import P10Home from './P10Home';
import P10Field from './P10Field'
import P10Form from './P10Form';
// import P10Form2 from './P10Form2';
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

else {
    return (
      <>
        <P10Home />
      </>
    )}

}

export default Main
