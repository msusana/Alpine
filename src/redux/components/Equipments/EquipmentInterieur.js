import React from "react";
import { connect } from "react-redux";
import { getEquipmentInterieur, deleteEquipmentInterieur} from "../../actions";
import { Carousel, Row, Col, Card, CardTitle, Icon, Button } from 'react-materialize'; 
import Menu from "../Menu";


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
                        <Button onClick = {()=>getEquipmentInterieur(equipment)}
                        floating
                        icon={<Icon>add</Icon>}
                        large
                        node="button"
                        waves="light"
                    />
                        
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
    
    const mappedPics = () => state.currentSelection.view.map((pictures) => {
        return (
            `${pictures}`
        )
    })
    return (
        <div className='itemEquipment'>
            <div className='menu'>
             <Menu />
            </div> 
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
            <Row>
                {selectedEquipmentInterieur.length !== [] && 
                    mapInterieurSelected()
                }
            </Row>
            <Row>
                {   equipmentInterieur.length !== 0 && 
                    mapInterieurJson()
                }
            </Row>
    
    
        
        </div>
    )
}
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