import React, {useEffect} from "react";
import { connect } from "react-redux";
import { Carousel } from 'react-materialize';
import Menu from "./Menu";

const Configurator = ({state}) => {
 
return(
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
        <div className='menu'>
        <Menu />
        </div>
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