import React from "react";
import { connect } from "react-redux";
import { getDesign, deleteDesign} from "../../actions";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem } from 'react-materialize'; 

const Design = ({state, design, getDesign, deleteDesign}) => { 


    const onDesign = (data) => {
       
        if(state.design.length === 0){
            getDesign(data)
        }else{
                for(var i = 0; i < state.design.length; i++){
                      if(state.design[i].name === data.name){
                        deleteDesign(data);
                        break;
                    }else{
                        for(var a = 0; a < state.design.length; a++){
                       if(state.design[a].name !== data.name){
                        getDesign(data);
                        break; 
                    } 
                }
                    }
                }
           
             }
        }
    
    function classDesign(name){
       
        for(var i = 0; i < state.design.length; i++){
            if(state.design[i].name === name){
                  let nameClass = "selected";
                  return nameClass  
        
    }
}
    }
console.log(classDesign('Pack héritage'))
const mapDesign = () =>
      
         design.map((equipment)=>{
             return(
              <Col key ={equipment} m={3} s={12} onClick={() => onDesign(equipment)}  className={classDesign(equipment.name)}>
                <Card className='itemDriving'
                key={equipment}
                header={<CardTitle image={equipment.picture}/>}
                > 
                <p>{()=> classDesign(equipment.name)}</p>
                <p className='equipmentName'>{equipment.name}</p>
                <p>{equipment.price} <i class="material-icons">attach_money</i></p>
                </Card> 
            </Col>
            )
         }
           
         )

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
 {mapDesign()}
        </Row>
 
   
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
        design: state.jsonOption.equipment.design
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getDesign: (data) => dispatch(getDesign(data)),
        deleteDesign: (data) => dispatch(deleteDesign(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Design)