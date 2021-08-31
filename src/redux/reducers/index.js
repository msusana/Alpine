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
      audioSystem: null,
      brake: null,
    },

    accessories:{
      interior : [],
      multimedia : [],
      transportAndProtection : [],
      exterior : [],
      garage: [],
    },
  }, 
 
  menu: null,

 
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
          }
          case "CHOOSEN_COLOR":{
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
            case "GET_MENU":{
              return{
                ...state,
              menu : action.data
              }
          }
          case "GET_EQUIPMENT":{
            return {
              ...state,
              currentSelection:{
                ...state.currentSelection,
                equipment:{
                  ...state.currentSelection.equipment,
              [action.component] : action.data
                }
              }
            }
          }
          case "DELETE_EQUIPMENT":{
            return{
              ...state,
              currentSelection:{
                ...state.currentSelection,
                equipment:{
                  ...state.currentSelection.equipment,
                  [action.component] : null
                  }
                }
              }
            }
  
            case "GET_EQUIPMENT_ARRAY":{
              return{
                ...state,
                currentSelection:{
                  ...state.currentSelection,
                  equipment:{
                    ...state.currentSelection.equipment,
                    [action.component]: state.currentSelection.equipment[action.component].concat(action.data),
                  }}, 
                  jsonOption:{
                   ...state.jsonOption,
                   equipment:{
                     ...state.jsonOption.equipment,
                     [action.component]: state.jsonOption.equipment[action.component].filter(equipment => equipment.name != action.data.name)
                   }
                }
              }
            }
            case "DELETE_EQUIPMENT_ARRAY":{
              return{
                ...state,
                currentSelection:{
                  ...state.currentSelection,
                  equipment:{
                    ...state.currentSelection.equipment,
                    [action.component]: state.currentSelection.equipment[action.component].filter(equipment => equipment.name != action.data.name),
                  }}, 
                  jsonOption:{
                    ...state.jsonOption,
                    equipment:{
                      ...state.jsonOption.equipment,
                      [action.component]: state.jsonOption.equipment[action.component].concat(action.data),
                    }
                  }
               }
              }
              case "GET_ACCESSORIES":{
                return{
                  ...state,
                  currentSelection:{
                    ...state.currentSelection,
                    accessories:{
                      ...state.currentSelection.accessories,
                      [action.component]: state.currentSelection.accessories[action.component].concat(action.data),
                    }
                  }, 
                    jsonOption:{
                     ...state.jsonOption,
                     accessories:{
                      ...state.jsonOption.accessories,
                      [action.component]: state.jsonOption.accessories[action.component].filter(accessorie => accessorie.name !== action.data.name)
                     }
                    }
                  }
                }
              case "DELETE_ACCESSORIES":{
                return{
                  ...state,
                  currentSelection:{
                    ...state.currentSelection,
                    accessories:{
                      ...state.currentSelection.accessories,
                      [action.component]: state.currentSelection.accessories[action.component].filter(equipment => equipment.name != action.data.name),
                    }}, 
                    jsonOption:{
                      ...state.jsonOption,
                      accessories:{
                        ...state.jsonOption.accessories,
                        [action.component]: state.jsonOption.accessories[action.component].concat(action.data),
                      }
                    }
                 }
                }
              
          default:
            return state
  }
}
