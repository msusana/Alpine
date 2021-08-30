import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Button, Icon } from 'react-materialize'; 
import { getBrake, deleteBrake} from "../../actions";
import Menu from "../Menu";

const Security = ({state, getBrake, deleteBrake}) => {

const onSecurity = (selection, data) => {
  
        if(state.currentSelection.equipment.brake === null){
            getBrake(data)
        }else if(state.currentSelection.equipment.brake !== null){
            if(state.currentSelection.equipment.brake.name === selection){
            deleteBrake()
            }else{
                getBrake(data)
            }
        }
    }

  
  
  const mappedPics = () => state.currentSelection.view.map((pictures) => {
            return (
                `${pictures}`
            )
        })
return(
 <div className='itemEquipment'>
     <div className='menu'>
        <Menu />
    </div> 
{(state.currentSelection.equipment.brake === null) && 
    <div className='inncustom-carousel'>
            <Carousel
            images={[
               mappedPics()
            ]}
            options={{
                fullWidth: true,
                indicators: true
            }}
            />
       </div>
    }
   
     {(state.currentSelection.equipment.brake) &&
    <div className='inncustom-carousel'>
        <img src={state.currentSelection.equipment.brake.picture}></img>
       </div>
    }
  

        <Row>
        <Col m={4} s={12} className='itemDriving'>
                <img src={state.jsonOption.equipment.safety.airbag.picture}></img>
                <p className='center'><strong>Option intégrée</strong></p>
                <p className='equipmentName'>{state.jsonOption.equipment.safety.airbag.name}</p>
              
            </Col>
   {
         state.jsonOption.equipment.safety.brake.map((equipment, index) => (
            <Col m={4} s={12} key={equipment} onClick={() => onSecurity(equipment.name, equipment)}  className={state.currentSelection.equipment.brake ? state.jsonOption.equipment.safety.brake[`${index}`].name === state.currentSelection.equipment.brake.name ? 'selected itemDriving' : 'itemDriving' : "itemDriving"}>
                <img src={equipment.picture}></img>

                {equipment.price === 0 &&
                    <>
                    <p className='center'><strong>Option intégrée</strong></p>
                    <p className='equipmentName'>{equipment.name}</p>
                    </>
                }
                {equipment.price !== 0 &&
                    <>
                    <p className='equipmentName'>{equipment.name}</p>
                    <p>{equipment.price} <i class='fas fa-comment-dollar'></i></p>
                    </>
                }
             
                        {state.currentSelection.equipment.brake &&
                        <>
                        {(state.jsonOption.equipment.safety.brake[`${index}`].name === state.currentSelection.equipment.brake.name) && (state.currentSelection.equipment.brake.price !== 0)&&
                            <Button onClick = {()=>deleteBrake()}
                            className="red right deleteInncustom"
                            floating
                            icon={<Icon>delete_forever</Icon>}
                            small                        
                            node="button"
                            waves="light"/>
                        }
                        </>
                    }
            </Col>
         ))}
        </Row>
 
   
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getBrake: (data) => dispatch(getBrake(data)),
        deleteBrake: () => dispatch(deleteBrake()),
       
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Security)