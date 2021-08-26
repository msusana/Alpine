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
   
  }, 
  equipment:{
     design : [{
        id:0,
        characteristic : null,
        selected : false,
      },
      {
        id:1,
        characteristic : null,
        selected : false,
      }
    
    
    ]
  },
 
  design:[],
  parkassist:null,
  exhaust: null,
  confort: [],
  equipmentINT : []
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

          return{
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
            equipmentINT: state.equipmentINT.concat(action.data),
            jsonOption:  {
              ...state.jsonOption,
              equipment:{
                ...state.equipment,
                innCustom: state.jsonOption.equipment.innCustom.filter(dataInnCustom => dataInnCustom.name != action.data.name)
              },
            }}
          console.log(newState);
          return newState
        }case "DELETE_EQUIPMENT_EXT":{
          let newState = {
            ...state,
           equipmentINT: state.equipmentINT.filter(dataInnCustom => dataInnCustom.name != action.data.name),
           jsonOption:  {
             ...state.jsonOption,
             equipment:{
               ...state.equipment,
               innCustom: state.jsonOption.equipment.innCustom.concat(action.data),
             },
           }}
         console.log(newState);
         return newState
        }
        
          default:
            return state
  }
}
