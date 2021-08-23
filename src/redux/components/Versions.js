import React from "react";
import { connect } from "react-redux";
 import { Row, Col } from 'react-materialize';
 import { getVersion } from "../actions";

const Versions = ({version, getVersion}) => {

    let dataJson = {}
    const onChange = (version) => {
      getVersion(version)
    }

return(
    <div>
      <Row>
        <Col s={12} m={6}>
          <img src='/AlpineCars_app-images/sources-homepage/versions/ALPINE-PURE-1.png' onClick={()=>onChange('Pure')}></img>
        </Col>
        <Col s={12} m={6}>
          <img src='/AlpineCars_app-images/sources-homepage/versions/ALPINE-LEGENDE-1.png' onClick={()=>onChange('Legende')}></img>
        </Col>
      </Row>
    </div>
)}
const mapStateToProps = state =>{
    return{
        version: state.version,
    }
}
const mapDispatchToProps = dispatch => {
    return{
      getVersion:(choseVersion)=> dispatch(getVersion(choseVersion)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Versions)