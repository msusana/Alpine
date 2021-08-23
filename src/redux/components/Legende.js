import React, {useEffect} from "react";
import { connect } from "react-redux";

const Legende = ({version}) => {
    
    let dataJson = {}
useEffect(()=>{
    
          fetch('../../alpine.json')
            .then((res) => {
                console.log(res);
                return res.json()})
            .then(data => { 
                console.log(data)
                //  dataJson = data
            })
            .catch(error => console.log(error))
    
})
      
   

return(
    <div>
  
    </div>
)}
const mapStateToProps = state =>{
    return{
        version: state.version,
    }
}
const mapDispatchToProps = dispatch => {
    return{
 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Legende)