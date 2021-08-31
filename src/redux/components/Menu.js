import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMenu } from "../actions";

const Menu = ({state, getMenu}) => {
    let prixTotal = state.accessoriesPrice + state.globalPrice + state.equipementsPrice;
    function selectColor(){

        return( alert("Selectionné une couleur en premier"))
    }

return(
    <div>
            <div className='linkMenu' onClick={()=> getMenu("color")} id={state.menu === "color" ? "menuSelected" : ""}><Link to= "/Couleur"> Couleur <i class="fas fa-palette"></i></Link></div>
            
            {(state.currentSelection.color !== null) && (state.version === "Pure") &&
                <div className='linkMenu' onClick={()=> getMenu("rims")} id={state.menu === "rims" ? "menuSelected" : ""}><Link to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
            }
            
            {(state.currentSelection.color === null) && (state.version === "Pure") &&
                <div onClick={() => selectColor()}className='linkMenu-disable'><Link disabled to= "/Jantes"> Jantes <i class='far fa-futbol'></i></Link></div>
            }
            
            <div className='linkMenu' onClick={()=> getMenu("sellerie")} id={state.menu === "sellerie" ? "menuSelected" : ""}><Link to= "/Sellerie"> Sellerie <i className="fas fa-couch"></i></Link></div>
            
            {state.currentSelection.color !== null &&
                <div className='linkMenu' onClick={()=> getMenu("equipments")} id={state.menu === "equipments" ? "menuSelected" : ""}><Link to= "/Equipements"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Equipements"> Equipements <i className='fas fa-cogs'></i></Link></div>
            }
            {state.currentSelection.color !== null &&
                <div className='linkMenu' onClick={()=> getMenu("accessories")} id={state.menu === "accessories" ? "menuSelected" : ""}><Link to= "/Accessories"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            {state.currentSelection.color === null &&
                <div onClick={() => selectColor()} className='linkMenu-disable'><Link disabled to= "/Accessories"> Accessories <i className='fas fa-box-open'></i></Link></div>
            }
            <div className='linkMenu' onClick={()=> getMenu("summary")} id={state.menu === "summary" ? "menuSelected" : ""}><Link to= "/Récapitulatif"> Récapitulatif <i className='fas fa-clipboard-list'></i></Link></div>
            {/* {prixTotal  &&
                <div className='linkMenu globalPrice'> Prix globale : {prixTotal} <i className='fas fa-comment-dollar'></i></div>
            } */}
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
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)