export const getDataVersion = (data) => {
        return{
           type : 'GET_VERSION',
            data 
        }
        
    }

    export const getData = () => {
        return {
            type : 'FETCHING_DATA'
        }
    }
 

export const getDataJson = (version, option) => {
    return{
       type : 'GET_RES_JSON',
       version: version,
       option : option 
    }
    
}

export const getExhaust = (data) => {
    console.log("exhauts")
    return{
       type : 'GET_EXHAUST',
       data
    }
    
}
export const deleteExhaust = () => {
    return{
       type : 'DELETE_EXHAUST',
    }
    
}
export const getParkAssist = (data) => {
    return{
       type : 'GET_PARKASSIST',
       data
    }
    
}
export const deleteParkAssist = () => {
    return{
       type : 'DELETE_PARKASSIST',
    }
    
}


export const getVersion = (data) => {
    return (dispatch) => {
            dispatch(getDataVersion(data))
        
    }
}

export const parseColorSelected = (data) => {

    return {
        type : "CHOOSEN_COLOR",
        data
    }
}

export const parseRimsSelected = (data) => {
    
    return {
        type : "CHOOSEN_RIMS",
        data
    }
}

export const parseSealSelected = (data) => {
    
    return {
        type : "CHOOSEN_SEAL",
        data
    }
}
export const getResJson = (version) => {
    console.log(version)
    return (dispatch) => {
        dispatch(getData())
    fetch('../../alpine.json')
    .then((res) => {
        return res.json()})
    .then(data => { 
        if (version === 'Pure'){
            dispatch(getDataJson(data.version.pure, data.version.option))
        }else if(version === 'Legende'){
           dispatch(getDataJson(data.version.legende, data.version.option))
        }
    })
    .catch(error => console.log(error))
    }
 
}
