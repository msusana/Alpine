import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getAccessories, deleteAccessories } from "../../actions"; 
import Menu from "../Menu";
 

const Interieur = ({state, innerAccessories,selectedAccessoriesInterieur, getAccessories, deleteAccessories}) => {

    console.log("state inner acces : ", state);

    const mapInterieurJson = () =>
    innerAccessories.map((innCustomAccessories)=>{
        
        return(
            <Col key ={innCustomAccessories} m={3} s={12} className='itemDriving'>
             <img src={innCustomAccessories.picture}></img>
             {
              innCustomAccessories.price === 0 &&
                 <>
                <p className='center'><strong>Option intégrée</strong></p>
                <p className='equipmentName truncate'>{innCustomAccessories.name}</p>
                </>
             }
              {
              innCustomAccessories.price !== 0 &&
                <>
                <p className='equipmentName truncate'>{innCustomAccessories.name}</p>
                <p>{innCustomAccessories.price} <i class='fas fa-comment-dollar'></i> <Button onClick = {()=>getAccessories('interior',innCustomAccessories)}
                    className='right'
                    floating
                    icon={<Icon>add</Icon>}
                    small
                    node="button"
                    waves="light"
                /></p>
                </>
             }
            </Col>
        )
    })

    
     
    const mapInterieurSelected = () =>
         selectedAccessoriesInterieur.map((innCustomAccessories)=>{
            return(
                <Col key ={innCustomAccessories} m={3} s={12} className='itemDriving'>
                    <img  src={innCustomAccessories.picture}></img>
                   <Button onClick = {()=>deleteAccessories('interior',innCustomAccessories)}
                        className="red right deleteInncustom"
                        floating
                        icon={<Icon>delete_forever</Icon>}
                        small                        
                        node="button"
                        waves="light"
                        />
                </Col>
            )
         })
    
        const mappedSelectionPictures = () => selectedAccessoriesInterieur.map((innCustomAccessories)=>{
            return (
                `${innCustomAccessories.picture}`
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
            {selectedAccessoriesInterieur.length === 0 && 
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
            {selectedAccessoriesInterieur.length !== 0 && 
                <div className='inncustom-carousel'>
                <Carousel
                images={[
                 mappedSelectionPictures()
                ]}
                options={{
                    fullWidth: true,
                    indicators: true
                }}
                />
                </div>
            }
            <Row className='optSelected'>
            
                {selectedAccessoriesInterieur.length !== 0 && 
                < >
                <h3>Options choisis</h3>
                    {mapInterieurSelected()}
                    </>
                }
            </Row>
            <Row>
                {   innerAccessories.length !== 0 && 
                    mapInterieurJson()
                }
            </Row>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        state : state,
        innerAccessories : state.jsonOption.accessories.interior,
        selectedAccessoriesInterieur: state.currentSelection.accessories.interior
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getAccessories: (component, data) =>  dispatch(getAccessories(component, data)),
        deleteAccessories: (component, data) =>  dispatch(deleteAccessories(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Interieur)