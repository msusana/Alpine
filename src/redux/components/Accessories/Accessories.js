import React from "react";
import { connect } from "react-redux";
import {BrowserRouter as Router,Route,} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-materialize';
import Exterieur from "./Exterieur";
import Garage from "./Garage";
import Interieur from "./Interieur";
import Multimedia from "./Multimedia";
import Transport from "./Transport";

const Accessories = ({}) => {
     
return(
    <div >
     <Tabs className="tab-demo z-depth-1"
        
    scope="tabs-31">

        <Tab active  title="Extérieur"
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }} >
            <Exterieur />
        </Tab> 

        <Tab
            options={{ 
                duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Intérieur">
            <Interieur />
        </Tab> 
  
        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Transport et Protection">
            <Transport />
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Multimédia">
            <Multimedia />
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Matériel de Garage">
            <Garage />
        </Tab>
    </Tabs>
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
export default connect(mapStateToProps, mapDispatchToProps)(Accessories)