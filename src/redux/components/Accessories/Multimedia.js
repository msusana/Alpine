import React from "react";
import { connect } from "react-redux";
import { Carousel, Row, Col, Button, Icon } from 'react-materialize';
import { getAccessories, deleteAccessories} from "../../actions";
import Menu from "../Menu";
import Accessories from "./Accessories";
 

const Multimedia = ({state, multimedia, selectedAccessoriesSupport, getAccessories, deleteAccessories}) => {
console.log(state)
    
    const mapSupportJson = () =>
    multimedia.map((multimediaSupport)=>{
        
        return(
            <Col key ={multimediaSupport} m={3} s={12} className='itemDriving'>
             <img src={multimediaSupport.picture}></img>
             {
              multimediaSupport.price === 0 &&
                 <>
                <p className='center'><strong>Option intégrée</strong></p>
                <p className='equipmentName truncate'>{multimediaSupport.name}</p>
                </>
             }
              {
              multimediaSupport.price !== 0 &&
                <>
                <p className='equipmentName truncate'>{multimediaSupport.name}</p>
                <p>{multimediaSupport.price} <i class='fas fa-comment-dollar'></i> <Button onClick = {()=>getAccessories('multimedia',multimediaSupport)}
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

    const mapSupportSelected = () =>
         selectedAccessoriesSupport.map((supportCustomAccessories)=>{
            return(
                <Col key ={supportCustomAccessories} m={3} s={12} className='itemDriving'>
                    <img  src={supportCustomAccessories.picture}></img>
                   <Button onClick = {()=>deleteAccessories('multimedia',supportCustomAccessories)}
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
    
        const mappedSelectionPictures = () => selectedAccessoriesSupport.map((supportAccessories)=>{
            return (
                `${supportAccessories.picture}`
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
        {selectedAccessoriesSupport.length === 0 && 
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
        {selectedAccessoriesSupport.length !== 0 && 
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
        
            {selectedAccessoriesSupport.length !== 0 && 
            < >
            <h3>Options choisis</h3>
                {mapSupportSelected()}
                </>
            }
        </Row>
        <Row>
            {   multimedia.length !== 0 && 
                mapSupportJson()
            }
        </Row>
        <Accessories />
    </div>
)
}

const mapStateToProps = state =>{
    return{
        state : state,
        multimedia : state.jsonOption.accessories.multimedia,
        selectedAccessoriesSupport: state.currentSelection.accessories.multimedia
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getAccessories: (component, data) =>  dispatch(getAccessories(component, data)),
        deleteAccessories: (component, data) =>  dispatch(deleteAccessories(component, data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Multimedia)