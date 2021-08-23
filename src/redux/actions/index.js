export const getDataVersion = (data) => {
        return{
           type : 'GET_VERSION',
            data 
        }
        
    }

export const getVersion = (data) => {
    return (dispatch) => {
            dispatch(getDataVersion(data))
        
    }
}