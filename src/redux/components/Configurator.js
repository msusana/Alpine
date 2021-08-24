import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Tabs, Tab } from 'react-materialize';

const Configurator = ({state}) => {
 
return(
    <div>
  {state.version}
  <Tabs
  className="tab-demo z-depth-1"
  options={{
    swipeable: true
  }}
  scope="tabs-31"
>
  <Tab 
  active
    className="blue"
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Test 1"
  >
    Test 1
  </Tab> 
  <Tab
    className="red"
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Test 2"
  >
    Test 2
  </Tab>
  <Tab
    className="green"
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="Test 3"
  >
    Test 3
  </Tab>
</Tabs>
    </div>
)}
const mapStateToProps = state =>{
    return{
        state: state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Configurator)