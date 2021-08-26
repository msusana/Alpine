import React from "react";
import { connect } from "react-redux";
import { getEquipmentInterieur, deleteEquipmentInterieur} from "../../actions";
import { Carousel, Row, Col, Card, CardTitle, Collection, CollectionItem, Button } from 'react-materialize'; 

const EquipmentInterieur = ({state, equipmentInterieur, getEquipmentInterieur, deleteEquipmentInterieur, selectedEquipmentInterieur}) => { 
console.log(state)




const mapInterieurJson = () =>
      
         equipmentInterieur.map((equipment)=>{
             return(
              <Col key ={equipment} m={3} s={12}>
                <Card className='itemDriving'
                key={equipment}
                header={<CardTitle image={equipment.picture}/>}>

                <p className='equipmentName'>{equipment.name}</p>
                <p>{equipment.price} <i class="material-icons">attach_money</i></p>
                <Button node="a" small  waves="light" onClick = {()=>getEquipmentInterieur(equipment)}
                    style={{
                    marginRight: '5px'
                    }}
                >
                    Ajuter
                </Button>
                </Card> 
            </Col>
            )
         })
const mapInterieurSelected = () =>
      
        selectedEquipmentInterieur.map((equipment)=>{
             return(
              <Col key ={equipment} m={3} s={12}>
                <Card className='itemDriving'
                key={equipment}
                header={<CardTitle image={equipment.picture}/>}>

                <p className='equipmentName'>{equipment.name}</p>
                <p>{equipment.price} <i class="material-icons">attach_money</i></p>
                <Button node="a" small  waves="light" onClick = {()=>deleteEquipmentInterieur(equipment)}
                    style={{
                    marginRight: '5px'
                    }}
                >
                    Suprimer
                </Button>
                </Card> 
            </Col>
            )
         })
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
            {selectedEquipmentInterieur.length !== 0 && 
                mapInterieurSelected()
            }
        </Row>
        <Row>
        {   equipmentInterieur.length !== 0 && 
                mapInterieurJson()
            }
        
        </Row>
 
   
    
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
        equipmentInterieur : state.jsonOption.equipment.innCustom,
        selectedEquipmentInterieur: state.currentSelection.equipment.innCustom
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getEquipmentInterieur : (data) => dispatch(getEquipmentInterieur(data)),
        deleteEquipmentInterieur : (data) => dispatch(deleteEquipmentInterieur(data)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EquipmentInterieur)