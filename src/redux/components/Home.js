import React from "react";
import { connect } from "react-redux";
import Versions from "./Versions";
import { Carousel, Row, Col } from 'react-materialize';

const Home = ({}) => {

return(
    <>
    <div>
    <Carousel
  carouselId="Carousel-35"
  className='carouselHome'
  images={[
    "/AlpineCars_app-images/sources-homepage/galerie/A110_LEGENDE_1.jpg",
    "/AlpineCars_app-images/sources-homepage/galerie/A110_LEGENDE_5.jpg",
    "/AlpineCars_app-images/sources-homepage/galerie/A110_PE_1.jpg",
    "/AlpineCars_app-images/sources-homepage/galerie/A110_PURE_4.jpg",
    "/AlpineCars_app-images/sources-homepage/galerie/A110_PURE_6.jpg",
    "/AlpineCars_app-images/sources-homepage/galerie/A110_PURE_8.jpg"
  ]}
  options={{
    fullWidth: true,
    indicators: true,
    centerImages: true,
  }}
    />  
    </div>
      <Row className='presentation'>
          <Col s={12}>
          <img src='/AlpineCars_app-images/sources-homepage/A110/Presentation_desktop-1.png'></img>
          </Col>
        </Row>
   
  
    <div className='versions' id='versions'  style={{
      backgroundImage:'url(/AlpineCars_app-images/sources-homepage/versions/COMPO-PURE.png)',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }}>
        <Versions />
    </div>
    </>
)}
const mapStateToProps = state =>{
    return{
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)