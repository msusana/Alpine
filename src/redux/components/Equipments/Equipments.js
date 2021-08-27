import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from 'react-materialize';
import Conduite from "./Conduite";
import Confort from "./Confort";
import Design from "./Design";
import EquipmentExterieur from "./EquipmentExterieur";
import EquipmentInterieur from "./EquipmentInterieur";
import Media from "./Media";
import Security from "./Security";

const Equipments = () => {

return(
    <div>
       <Tabs className="tab-demo z-depth-1"
    scope="tabs-22">

        <Tab active  title="Conduite"
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }} >
            {/* <Conduite /> */}
            <h1>TEST</h1>
        </Tab> 

        <Tab
            options={{ 
                duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Confort">
            {/* <Confort /> */}
            <h1>TEST</h1>
        </Tab> 
  
        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Design">
            {/* <Design /> */}
            <h1>TEST</h1>
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Extérieur">
            {/* <EquipmentExterieur /> */}
            <h1>TEST</h1>
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Intérieur">
            <EquipmentInterieur />
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Media">
            {/* <Media /> */}
            <h1>TEST</h1>
        </Tab>

        <Tab 
            options={{
            duration: 300, onShow: null, responsiveThreshold: Infinity, swipeable: false
            }}
            title="Security">
            {/* <Security /> */}
            <h1>TEST</h1>
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
export default connect(mapStateToProps, mapDispatchToProps)(Equipments)