import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize'; 
import { getExhaust, getParkAssist, deleteExhaust, deleteParkAssist} from "../../actions";

const Conduite = ({state, driving, getExhaust, getParkAssist, deleteExhaust, deleteParkAssist}) => {

const onConduite = (selection, data) => {
console.log(state)
    if(selection === 'Exhaust'){
        if(state.exhaust === null){
            getExhaust(data)
            
        }else{
            deleteExhaust()
        }
    }
    if(selection !== 'Exhaust'){

        if(state.parkassist === null){
            getParkAssist(data)
        }else if(state.parkassist !== null){
            if(state.parkassist.name === selection){
                console.log('delete parkassist')
            deleteParkAssist()
            }else{
                getParkAssist(data)
            }
        }
    }

  }

return(
    <div className='itemEquipment'>
        <Row>
        <Col m={8} s={12}>
        <Carousel
        carouselId="Carousel-61"
        images={[
            driving.exhaust.picture,
            driving.exhaust.picture
           
        ]}
        options={{
            fullWidth: true,
            indicators: true
        }}
        />
        </Col>
        <Col m={4} s={12}>
        <Row>
            <Col
                m={6}
                s={12}
            >
                <Collection>
                <CollectionItem href="#">
                    Alvin
                </CollectionItem>
                <CollectionItem
                    active
                    href="#"
                >
                    Alvin
                </CollectionItem>
                <CollectionItem href="#">
                    Alvin
                </CollectionItem>
                <CollectionItem href="#">
                    Alvin
                </CollectionItem>
                </Collection>
            </Col>
            </Row>
        </Col>
        </Row>
        <Row>
        <Col m={3} s={12} onClick={() => onConduite("Exhaust", driving.exhaust)} className={state.exhaust ? 'selected' : ''}>
                <Card className="itemDriving"
                key={driving.exhaust}
                header={<CardTitle image={driving.exhaust.picture}/>}
                > 
                <p className='equipmentName'>{driving.exhaust.name}</p>
                <p>{driving.exhaust.price}<i class="material-icons">attach_money</i></p>
                </Card> 
            </Col>
   {
         driving.parkAssist.map((equipment, index) => (
            <Col m={3} s={12} onClick={() => onConduite(equipment.name, equipment)} className={state.parkassist ? driving.parkAssist[`${index}`].name === state.parkassist.name ? 'selected' : '' : ""} >
                <Card className='itemDriving'
                key={equipment}
                header={<CardTitle image={equipment.picture}/>}
                > 
                <p className='equipmentName'>{equipment.name}</p>
                <p>{equipment.price} <i class="material-icons">attach_money</i></p>
                </Card> 
            </Col>
         ))}
        </Row>
 
   
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
        driving: state.jsonOption.equipment.driving
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getExhaust: (data) => dispatch(getExhaust(data)),
        getParkAssist: (data) => dispatch(getParkAssist(data)),
        deleteExhaust: () => dispatch(deleteExhaust()),
        deleteParkAssist: () => dispatch(deleteParkAssist()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Conduite)