export const initialState = {
  version: null,
  photoPure : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-PURE-1.png',
  photoLegende : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-LEGENDE-1.png',
  jsonVersion : {},
  jsonOption : {},
  isFetching : false,
  rimsJson : [],
  sealingJson : [],
  currentSelection : {
    name : null,
    color : null,
    price : null,
    mainPic : null,
    view : [],
    rims : {},
    sealing : null,
    equipment:{
      innCustom : [],
      parkAssist:null,
      exhaust: null, 
      confort:null,
      design: [],
      logo: null, 
      stirrups: null,
      telemetrics: null,
      audioSystem: null
    },
  }, 
 
 
  design:[],
  
  confort: [],
 
  };
   
  export const dataStore = (state = initialState, action) => {
    console.log(action)
      switch (action.type){
       
          case "GET_VERSION":{
              return{
                ...state, 
                version : action.data
              }
          }
          case "GET_RES_JSON":{
            return{
              ...state,
              jsonVersion : action.version,
              jsonOption : action.option,
              sealingJson : action.version.sealing.characteristic,
              isFetching: false
            }
          }
          case "FETCHING_DATA":{
            return{
              ...state,
              isFetching:true,
            }
        }case "CHOOSEN_COLOR":{
          let newState = {
            ...state,
            currentSelection : {
              ...state.currentSelection,
              name : action.data.name,
              color : action.data.color,
              price : action.data.price,
              mainPic : action.data.rims[0].pictures[0],
              view : action.data.rims[0].pictures,
            },
            rimsJson : action.data.rims
          }
          console.log(newState, 'colorChoice');
          return newState
      }
      case "CHOOSEN_RIMS":{
        return{
            ...state,
            currentSelection : {
            ...state.currentSelection,
            rims : action.data,
            view: action.data.pictures
          }
        }
      } 
      case "CHOOSEN_SEAL":{
        return{
          ...state,
          currentSelection : {
            ...state.currentSelection,
            sealing : action.data
          }
        }
    }
        case "GET_PARKASSIST":{
          let newState = {
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
            parkAssist: action.data
          }}
        }
        return newState}
        case "DELETE_PARKASSIST":{
          let newState = {
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                parkAssist:null
          }}
        }
  
        return newState}
        case "GET_EXHAUST":{
          let newState ={
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment, 
                exhaust: action.data
          }}}
        return newState}
        case "DELETE_EXHAUST":{
          let newState ={
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                exhaust: null
          }}}
        return newState}
        case "GET_CONFORT":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                confort: action.data
           
          }}}
        }case "DELETE_CONFORT":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                confort: null
          }}}
        }
        case "GET_DESIGN":{
          let newState = {
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                design: state.currentSelection.equipment.design.concat(action.data),
              }}, 
              jsonOption:{
               ...state.jsonOption,
               equipment:{
                 ...state.jsonOption.equipment,
                 design: state.jsonOption.equipment.design.filter(dataDesign => dataDesign.name != action.data.name)
               }
            
           }}
           console.log('design new', newState)
         return newState
       }
        case "DELETE_DESIGN":{
          let newState = {
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                design: state.currentSelection.equipment.design.filter(dataDesign => dataDesign.name != action.data.name),
              }}, 
              jsonOption:{
                ...state.jsonOption,
                equipment:{
                  ...state.jsonOption.equipment,
                  design: state.jsonOption.equipment.design.concat(action.data),
                }
            }
           }
           console.log('delete design', newState)
         return newState
        }
        case "GET_EQUIPMENT_INT":{
          let newState = {
             ...state,
             currentSelection:{
               ...state.currentSelection,
               equipment:{
                 ...state.currentSelection.equipment,
                 innCustom: state.currentSelection.equipment.innCustom.concat(action.data),
               }}, 
               jsonOption:{
                ...state.jsonOption,
                equipment:{
                  ...state.jsonOption.equipment,
                  innCustom: state.jsonOption.equipment.innCustom.filter(dataInnCustom => dataInnCustom.name != action.data.name)
                }
             
            }}
          return newState
        }case "DELETE_EQUIPMENT_INT":{
          let newState = {
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                innCustom: state.currentSelection.equipment.innCustom.filter(dataInnCustom => dataInnCustom.name != action.data.name),
              }}, 
              jsonOption:{
                ...state.jsonOption,
                equipment:{
                  ...state.jsonOption.equipment,
                  innCustom: state.jsonOption.equipment.innCustom.concat(action.data),
                }
            }
           }
         return newState
        }case "GET_LOGO":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                logo: action.data
           
          }}}
        }case "DELETE_LOGO":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                logo: null
          }}}
        }case "GET_STIRRUPS":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                stirrups: action.data
           
          }}}
        }case "DELETE_STIRRUPS":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                stirrups: null
          }}}
        }case "GET_TELEMETRICS":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                telemetrics: action.data
           
          }}}
        }case "DELETE_TELEMETRICS":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                telemetrics: null
          }}}
        }case "GET_AUDIO":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                audioSystem: action.data
           
          }}}
        }case "DELETE_AUDIO":{
          return{
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.currentSelection.equipment,
                audioSystem: null
          }}}
        }
        
          default:
            return state
  }
}
