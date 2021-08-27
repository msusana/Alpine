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
      car:'test'
    },
  }, 
 
 
  design:[],
  parkassist:null,
  exhaust: null,
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
          return{
            ...state,
            parkassist: action.data
           
          }
        }case "DELETE_PARKASSIST":{
          return{
            ...state,
            parkassist:null
          }
        }
        case "GET_EXHAUST":{
          return{
            ...state,
            exhaust: action.data
           
          }
        }case "DELETE_EXHAUST":{
          return{
            ...state,
            exhaust: null,
          }
        }
        case "GET_CONFORT":{
          return{
            ...state,
            confort: state.confort.concat(action.data)
           
          }
        }case "DELETE_CONFORT":{
          return{
            ...state,
            confort: state.confort.filter(confort => confort.name != action.data.name)
          }
        }
        case "GET_DESIGN":{
          return{
            ...state,
            design: state.confort.concat(action.data)
           
          }
        }case "DELETE_DESIGN":{
          return{
            ...state,
            design: state.confort.filter(confort => confort.name != action.data.name)
          }
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
          console.log("que pasa ? : ", newState);
          return newState
        }case "DELETE_EQUIPMENT_EXT":{
          let newState = {
            ...state,
            currentSelection:{
              ...state.currentSelection,
              equipment:{
                ...state.jsonOption.equipment,
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
         console.log(newState);
         return newState
        }
        
          default:
            return state
  }
}
