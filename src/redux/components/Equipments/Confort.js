import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize'; 
import { getConfort, deleteConfort} from "../../actions";

const Confort = ({state, confort, getConfort, deleteConfort}) => {

const onConfort = (selection, data) => {
console.log('state',state)
console.log(selection)

        if(state.confort.length === 0){
            getConfort(data)
        }else{
                for(var i = 0; i < state.confort.length; i++){
                      if(state.confort[i].name === selection){
                        deleteConfort(data);
                        break;
                    }else if(state.confort[i].name !== selection){
                        getConfort(data);
                        break;
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
            state.currentSelection.mainPic
           
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
   {
         confort.map((equipment, index) => (
            <Col m={3} s={12} onClick={() => onConfort(equipment.name, equipment)} className={state.confort ? confort[`${index}`].name === state.confort.name ? 'selected' : '' : ""} >
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
        confort: state.jsonOption.equipment.confort
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getConfort: (data) => dispatch(getConfort(data)),
        deleteConfort: (data) => dispatch(deleteConfort(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Confort)