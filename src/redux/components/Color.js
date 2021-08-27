import React from "react";
import { connect } from "react-redux";
import { Row, Col, Carousel, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { parseColorSelected } from "../actions";
import Menu from "./Menu";

const Color = ({state, parseColorSelected}) => {

    let mappedColor = state.jsonVersion.characteristic
   
    const getColor = (currentSelect) => {

            parseColorSelected(currentSelect)
    }

    const displayColor = () => mappedColor.map((color) => {

        return (
            <div key={color}>
                <div className="container">
                    <Col className="" s={6} m={4} >
                       <div className="custom-color-select">
                        <img src={color.rims[0].pictures[0]} onClick={() => (getColor(color))}/>
                        {color.name}
                       </div>   
                    </Col>
                </div>
            </div>
        )
    })

    const mappedPics = () => state.currentSelection.view.map((pictures) => {
        return (
            `${pictures}`
        )
    })
    const mappedPicsJson = () => state.jsonVersion.pictures.map((pictures) => {
        return (
            `${pictures}`
        )
    })

    return(
       <div>
    <div className='menu'>
        <Menu />
        </div> 
        <h3 className="car-name">{state.currentSelection.name}</h3>
            {state.currentSelection.color === null &&
                <div className="container">
                    <h1 className="select-car-please"> Please, select a car.</h1>
                </div>
            }  
            <Row>
                {displayColor()}
            </Row>
           {state.currentSelection.color !== null && 
  
                <Carousel 
                    className="carrousel-select"
                    carouselId="Carousel-32"
                    images={[
                    mappedPics()
                    ]}
                    options={{
                        fullWidth: true,
                        indicators: true,
                    }}
                    /> 
         
           }    {state.currentSelection.color === null && 
         
                <Carousel 
                    className="carrousel-select"
                    carouselId="Carousel-32"
                    images={[
                    mappedPicsJson()
                    ]}
                    options={{
                      
                        fullWidth: true,
                        indicators: true,
                      
                    }}
                    /> 
            
           }
          

          
                {(state.version === "Pure") && (state.currentSelection.color !== null) &&
                    <Link to="/Jantes">
                        <div className="next-step">
                        <Button node="button" waves="light">
                            Next step
                            <Icon right>
                            arrow_forward
                            </Icon>
                        </Button>
                        </div>
                    </Link>
                }
            {(state.version === "Legende") && (state.currentSelection.color !== null) &&
                <Link to="/Sellerie">
                    <div className="next-step">
                        <Button node="button" waves="light">
                            Next step
                            <Icon right>
                            arrow_forward
                            </Icon>
                        </Button>
                    </div>
                </Link>
            }
        </div>
    )}

const mapStateToProps = state =>{
    return{
        state: state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
      
        parseColorSelected: (data)=> dispatch(parseColorSelected(data)),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color)