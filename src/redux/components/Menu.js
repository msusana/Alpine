import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMenu, getEquipementPannel } from "../actions";
import { Button, Modal } from 'react-materialize'; 
import Summary from "./Summary";


const Menu = ({state, getMenu, getEquipementPannel}) => {
    let prixTotal = state.accessoriesPrice + state.globalPrice + state.equipementsPrice;
    function selectColor(){

        return( alert("Selectionné une couleur en premier"))
    }

    const getMenuAndPannel = (menu, pannel) => {

        getMenu(menu);
        getEquipementPannel(pannel);
    }

return(
    <div>
            <div className='linkMenu' id={state.menu === "color" ? "menuSelected" : ""}><Link onClick={()=> getMenu("color")} to= "/Couleur"> Couleur <i class="fas fa-palette"></i></Link></div>
            
            {(state.currentSelection.color !== null) && (state.version === "Pure") &&
                <div className='linkMenu'  id={state.menu === "rims" ? "menuSelected" : ""}><Link  onClick={()=> getMenu("rims")} to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
            }
            
            {(state.currentSelection.color === null) && (state.version === "Pure") &&
                <div onClick={() => selectColor()}className='linkMenu-disable'><Link disabled to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
            }
            
            <div className='linkMenu' id={state.menu === "sellerie" ? "menuSelected" : ""}><Link onClick={()=> getMenu("sellerie")} to= "/Sellerie"> Sellerie <i className="fas fa-couch"></i></Link></div>
            
            {state.currentSelection.color !== null &&
                <div className='linkMenu'  id={state.menu === "equipments" ? "menuSelected" : ""}><Link onClick={()=> getMenuAndPannel("equipments", "conduite")} to= "/Conduite"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Conduite"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color !== null &&
                <div className='linkMenu' id={state.menu === "accessories" ? "menuSelected" : ""}><Link onClick={()=> getMenuAndPannel("accessories", "exterieur")} to= "/Exterieur"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Exterieur"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
           
            
            <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            id="Modal-10"
            open={false}
            className="modalTest"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            
            trigger={<Button className='blue-grey darken-4 btn-large'  node="button">Récapitulatif <i className='fas fa-clipboard-list'></i></Button>}
            >
            <Summary />
            </Modal>
            
            
            
            
            
            
            {prixTotal  &&
                <div className='linkMenu globalPrice'> Prix globale : {prixTotal} <i className='fas fa-comment-dollar'></i></div>
            }
    </div>
)}
const mapStateToProps = state =>{
    return{
        state : state,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        getMenu: (data)=> dispatch(getMenu(data)),
        getEquipementPannel : (data)=>dispatch(getEquipementPannel(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)