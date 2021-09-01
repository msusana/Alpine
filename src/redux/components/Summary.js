import React from "react";
import { connect } from "react-redux";
 

const Summary = ({}) => {

return(
    <div >
    <a href='/'>recommencer</a>
    <p>Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos "nativos" 4D se basa en el principio clásico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notación JSON:

El nombre de una propiedad es siempre un texto, por ejemplo "Name". Debe seguir reglas específicas.

Un valor de propiedad puede ser del tipo siguiente:

número (Real, Entero, etc.)
texto
null
booleano
puntero (almacenado como tal, evaluado con el comando JSON Stringify o al copiar),
fecha (tipo fecha o cadena en formato fecha ISO)
objeto(1) (los objetos pueden ser anidados en varios niveles)
imagen(2)
colección
(1)Los objetos ORDA como entidades o las selecciones de entidades no pueden almacenarse en campos objeto; sin embargo, se soportan completamente en las variables objeto en memoria.

(2)Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "[objeto Imagen]".

Atención: recuerde que los nombres de atributos diferencian entre mayúsculas y minúsculas.

Las variables, campos o expresiones de tipo Objeto se gestionan utilizando la notación objeto o los comandos clásicos disponibles en el tema Objetos (Lenguaje). Tenga en cuenta que se pueden utilizar comandos específicos del tema Búsquedas, como QUERY BY ATTRIBUTE, QUERY SELECTION BY ATTRIBUTE, o ORDER BY ATTRIBUTE para llevar a cabo el procesamiento de los campos objetos.

Cada valor de propiedad al que se accede a través de la notación de objeto se considera una expresión. Puede utilizar estos valores siempre que se esperen expresiones 4D:

en código 4D, ya sea escrito en los métodos (editor de métodos) o externalizado (fórmulas, archivos de etiquetas procesados por PROCESS 4D TAGS o el servidor web, archivos de exportación, documentos 4D Write Pro...),
en las áreas de expresiones del depurador y del explorador de ejecución,
en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresión, así como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo oLas variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos "nativos" 4D se basa en el principio clásico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notación JSON: El nombre de una propiedad es siempre un texto, por ejemplo "Name". Debe seguir reglas específicas. Un valor de propiedad puede ser del tipo siguiente: número (Real, Entero, etc.) texto null booleano puntero (almacenado como tal, evaluado con el comando JSON Stringify o al copiar), fecha (tipo fecha o cadena en formato fecha ISO) objeto(1) (los objetos pueden ser anidados en varios niveles) imagen(2) colección (1)Los objetos ORDA como entidades o las selecciones de entidades no pueden almacenarse en campos objeto; sin embargo, se soportan completamente en las variables objeto en memoria. (2)Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "[objeto Imagen]". Atención: recuerde que los nombres de atributos diferencian entre mayúsculas y minúsculas. Las variables, campos o expresiones de tipo Objeto se gestionan utilizando la notación objeto o los comandos clásicos disponibles en el tema Objetos (Lenguaje). Tenga en cuenta que se pueden utilizar comandos específicos del tema Búsquedas, como QUERY BY ATTRIBUTE, QUERY SELECTION BY ATTRIBUTE, o ORDER BY ATTRIBUTE para llevar a cabo el procesamiento de los campos objetos. Cada valor de propiedad al que se accede a través de la notación de objeto se considera una expresión. Puede utilizar estos valores siempre que se esperen expresiones 4D: en código 4D, ya sea escrito en los métodos (editor de métodos) o externalizado (fórmulas, archivos de etiquetas procesados por PROCESS 4D TAGS o el servidor web, archivos de exportación, documentos 4D Write Pro...), en las áreas de expresiones del depurador y del explorador de ejecución, en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresión, así como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo o color de fuente). color de fuente).
    </p>
    </div>
)}
const mapStateToProps = state =>{
    return{
        
    }
}
const mapDispatchToProps = dispatch => {
    return{
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Summary)