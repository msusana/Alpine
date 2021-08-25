export const initialState = {
  version: null,
  photoPure : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-PURE-1.png',
  photoLegende : '/AlpineCars_app-images/sources-homepage/versions/ALPINE-LEGENDE-1.png',
  jsonVersion : {},
  jsonOption : {},
  isFetching : false,
  parkassist:null,
  exhaust: null,
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
              isFetching: false
            }
          }
          case "FETCHING_DATA":{
            return{
              ...state,
              isFetching:true,
            }
        }case "GET_PARKASSIST":{
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
        
        
          default:
            return state
  }
}
