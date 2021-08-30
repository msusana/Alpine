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
export const getConfort = (data) => {
    return{
       type : 'GET_CONFORT',
       data
    }
    
}
export const deleteConfort  = () => {
    return{
       type : 'DELETE_CONFORT',
    }
    
}
export const getDesign = (data) => {
    console.log(data)
    return{
       type : 'GET_DESIGN',
       data
    }
    
}
export const deleteDesign  = (data) => {
    console.log(data)
    return{
       type : 'DELETE_DESIGN',
       data
    }
    
}
export const getEquipmentInterieur = (data) => {
    return{
       type : 'GET_EQUIPMENT_INT',
       data
    }
    
}
export const deleteEquipmentInterieur  = (data) => {
    return{
       type : 'DELETE_EQUIPMENT_INT',
       data
    }
    
}

export const getStirrups = (data) => {
    return{
       type : 'GET_STIRRUPS',
       data
    }
    
}
export const deleteStirrups  = () => {
    return{
       type : 'DELETE_STIRRUPS',
    }
    
}
export const getLogo = (data) => {
    return{
       type : 'GET_LOGO',
       data
    }
    
}
export const deleteLogo  = () => {
    return{
       type : 'DELETE_LOGO',
    }
    
}


export const getTelemetrics = (data) => {
    return{
       type : 'GET_TELEMETRICS',
       data
    }
    
}
export const deleteTelemetrics = () => {
    return{
       type : 'DELETE_TELEMETRICS',
    }
    
}
export const getAudioSystem = (data) => {
    return{
       type : 'GET_AUDIO',
       data
    }
    
}
export const deleteAudioSystem  = () => {
    return{
       type : 'DELETE_AUDIO',
    }
    
}

export const getResJson = (version) => {

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
