export const initialState = {
  version: '',
    
  };
   
  export const dataStore = (state = initialState, action) => {
      switch (action.type){
       
          case "GET_VERSION":{
              return{
                ...state, 
                version : action.data
              }
          }
          case "":{
            return{
              
            }
          }
          case "":{
            return{
            
            }
        }
    
        
          default:
            return state
  }
}
