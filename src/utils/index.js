export const isNull = dato => {
    if (!dato || dato === '') {
        return true
    } else return false
}

export const isNumeric = dato => {
    // const value = dato.replace(/,/g, '');
    if (isNaN(dato) && dato !== '' && dato !== undefined && dato !== null) {
        return true
    } else return false
}
export const isPassword = dato => {
    const validar = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (validar.test(dato) === true) {
        return false
    } else return true
}

export const onlyLetters = dato => {
    const validar = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    if (validar.test(dato) === false && dato !== '' && dato !== undefined && dato !== null) {
        return true
    } else return false
}

export const rangeLength = (dato, min, max) => {
    if (dato !== undefined && dato !== '' && dato !== null) {
        if ((dato.length < min) || (dato.length > max)) {
            return true
        } else return false
    } else
    {return false}
}

export const Match = (dato1, dato2) => {
    if (dato1 !== dato2) {
        return true
    } else return false
}

export const isEmail = email => {
    const validar = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (validar.test(email) === false && email !== '' && email !== undefined && email !== null) {
        return true
    } else return false
}

export const passwordConfirm = (value, valueConfirm) => !(value === valueConfirm)

export const numberFormat = value => value ? (parseInt(value) ? new Intl.NumberFormat('de-DE').format(parseFloat(`${ value }`.replace(/\./g, ''))) : '') : (value === 0 ? 0 : '')

// export const dateFormat = value => moment(value).format('DD-MM-YYYY')

export const validationImg = file => (/\.(jpg|png|gif|jpeg)$/i).test(file.name)

export const CalcularDigitoVerificacion = value => {
    let x = 0, y = 0, i = 0, myNit;

    // Se limpia el Nit
    myNit = value.replace(/\s/g, ''); // Espacios
    myNit = value.replace(/,/g, ''); // Comas
    myNit = value.replace(/\./g, ''); // Puntos
    myNit = value.replace(/-/g, ''); // Guiones

    // Se valida el nit
    if (isNaN(myNit)) {
        return ''
    }

    // Procedimiento
    const vpri = new Array(16)
    const z = myNit.length

    vpri[1] = 3
    vpri[2] = 7
    vpri[3] = 13
    vpri[4] = 17
    vpri[5] = 19
    vpri[6] = 23
    vpri[7] = 29
    vpri[8] = 37
    vpri[9] = 41
    vpri[10] = 43
    vpri[11] = 47
    vpri[12] = 53
    vpri[13] = 59
    vpri[14] = 67
    vpri[15] = 71

    for (i; i < z; i++) {
        y = myNit.substr(i, 1)

        x += (y * vpri[z-i])
    }

    y = x % 11

    return (y > 1) ? 11 - y : y
}

export const extFile = filename => {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename)[0] : undefined;
}

/**
 * @description Función que valida los formularios, funciona para trabajar los errores con estados
 * @version 0.1.1
 * @param {array} elements elementos del formulario
 * @return {array} devuelve un array de bolleanos con el nombre identificador para cada estado en react.
 */
export const validationSubmitHooks = elements => {
    let errorForm = {}
    for (let i = 0; i < elements.length; i++){
        if (elements[i].name) {
            if (elements[i].type === 'text' || elements[i].type === 'password' || elements[i].type === 'email' || elements[i].type === 'number' || elements[i].type === 'hidden'){
                if (elements[i].dataset.required === 'true') {
                    if (!elements[i].value) errorForm = { ...errorForm, [elements[i].name]: !elements[i].value }
                    else errorForm = { ...errorForm, [elements[i].name]: !elements[i].value }
                } else {
                    errorForm = { ...errorForm, [elements[i].name]: false }
                }
            }
        }
    }
    return errorForm
}

/**
 *
 * @param {Object} data objeto a filtrar
 * @param {Array} filters array a comparar o claves del objeto a excluir
 * @param {boolean} dataFilter booleano para devolver los datos filtrados o no
 * @return {Object} devuelve un objeto con los datos filtrados
 */
export const filterKeyObject = (data, filters, dataFilter) => {
    let values = {}, valuesFilter = {}
    for (const elem in data) {
        let coincidence = false
        for (let i = 0; i < filters.length; i++) {
            if (elem === filters[i]) coincidence = true
            else valuesFilter = filters[i]
        }

        if (!coincidence) values = { ...values, [elem]: data[elem] }
        else valuesFilter = { ...valuesFilter, [elem]: data[elem] }
    }
    if (!dataFilter) return values
    if (dataFilter) return { values, valuesFilter }
}

/**
 *
 * @param {String} url ruta del objeto a convertir
 * @param {String} filename Nombre del archivo
 * @param {String} mimeType tipo a convertir
 * @return {File} archivo transformado
 */
export const urlToFile = async (url, filename, mimeType) => {
    return (fetch(url)
        .then(function(res){return res.arrayBuffer();})
        .then(function(buf){return new File([buf], filename, { type:mimeType }) })
    );
}

/**
 * busca en el localstore la información y la parsea si es necesario
 * @version 0.0.1
 * @param {*} key clave de busqueda
 * @param {boolean} isParse si se quiere parsear o no
 * @return {boolean} devuelve el valor parseado o false si pudo guardar en localStorage
 */
export const getDataLS = (key, isParse) => {
    try {
        const jsonValue = window.localStorage.getItem(key)
        return isParse ? (jsonValue ? JSON.parse(jsonValue) : false) : jsonValue
    } catch (e) {
        return false
    }
}

/**
 * actualizar cache de apollo
 * @param {{ cache: object, query: object, nameFun: string, dataNew: object, type: number, id: string }} params Parámetros para actualizar el cachet de apollo
 * @returns {null} no hay retorno
 */
export const updateCache = async ({ cache, query, nameFun, dataNew, type, id }) => {
    return cache.modify({
        fields: {
            [nameFun](dataOld = []) {
                if (type === 1) return cache.writeQuery({ query, data: [...(dataOld || []), { ...(dataNew || {}) } ] })
                if (type === 2) return cache.writeQuery({ query, data: { ...(dataOld || {}), ...(dataNew || {}) } })
                if (type === 3) return cache.writeQuery({ query, data: dataOld.filter(x => x === id) })
            }
        }
    })
}