import React from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import Conduite from "./Conduite";
import Confort from "./Confort";
import Design from "./Design";
import EquipmentExterieur from "./EquipmentExterieur";
import EquipmentInterieur from "./EquipmentInterieur";
import Media from "./Media";
import Security from "./Security";

const Equipments = ({}) => {
    <Router>
        <Route path="/Conduite" exact component={Conduite}/>
        <Route path="/Confort" exact component={Confort}/>
        <Route path="/Design" exact component={Design}/>
        <Route path="/EquipementExterieur" exact component={EquipmentExterieur}/>
        <Route path="/EquipementInterieur" exact component={EquipmentInterieur}/>
        <Route path="/Media" exact component={Media}/>
        <Route path="/Security" exact component={Security}/>
  </Router>
return(
    <div >
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Equipments)