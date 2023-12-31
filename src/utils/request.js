import store from "../store"

function getToken() {

    const data = {

        body: {

            slpcode: store.state.authentication?.cuenta?.slpcode
        },

        config: {

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function getPlantilla(record) {

    const data = {

        body: {

            rol: store.state.authentication?.cuenta?.rol,

            tipo: record
        },

        config: {

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostCompraVenta(record) {

    const data = {

        body: {

            NOMBRE: record?.NOMBRE,

            PROFESION: record?.PROFESION,

            DEPARTAMENTO: record?.DEPARTAMENTO,

            MUNICIPIO: record?.MUNICIPIO,

            DUI: record?.DUI,

            PRECIO: record?.PRECIO,

            POLIZA: record?.PLANTILLA === 10 ? "M-" + record?.POLIZA : "4-" + record?.POLIZA,

            MARCA: record?.MARCA,

            MODELO: record?.MODELO,

            ANIO: record?.ANIO,

            COLOR: record?.COLOR,

            NUMEROMOTOR: record?.NUMEROMOTOR,

            NUMEROCHASIS: record?.NUMEROCHASIS,

            NUMEROVIN: record?.NUMEROVIN,

            TIPO: record?.TIPO,

            MESES: record?.MESES ?? 0,

            VENCIMIENTO: record?.VENCIMIENTO ?? '1990-01-01',

            PRIMERACUOTA: record?.PRIMERACUOTA ?? '1990-01-01',

            DIAPAGO: record?.DIAPAGO ?? 0,

            CUOTA: record?.CUOTA ?? 0,

            PRECIOCUOTA: record?.PRECIOCUOTA ?? 0,

            PRIMA: record?.PRIMA,

            NOMBREF: record?.NOMBREF ?? '',

            DEPARTAMENTOF: record?.DEPARTAMENTOF ?? '',

            MUNICIPIOF: record?.MUNICIPIOF ?? '',

            DUIF: record?.DUIF ?? '00000000-0',

            PLANTILLA: record?.PLANTILLA,

            USUARIO: store.state.authentication?.cuenta?.slpcode
        },

        config: {

            responseType: 'blob',

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostPlantilla(record) {

    const data = {

        body: {

            NOMBRE: record?.NOMBRE,

            ESTADO: record?.ESTADO,

            CONTENIDO: record?.CONTENIDO,

            ID: record?.ID
        },

        config: {

            responseType: 'blob',

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostPagare(record) {

    const data = {

        body: {

            NOMBRE: record?.NOMBRE,

            DUI: record?.DUI,

            FECHAPAGO: record?.FECHAPAGO,

            DIA: record?.DIA,

            CREDITO: record?.CREDITO,

            DEPARTAMENTO: record?.DEPARTAMENTO,

            MUNICIPIO: record?.MUNICIPIO,

            PLANTILLA: record?.PLANTILLA,

            USUARIO: store.state.authentication?.cuenta?.slpcode
        },

        config: {

            responseType: 'blob',

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostPrimeraMatricula(record) {

    const data = {

        body: {

            NOMBRE: record?.NOMBRE,

            PROFESION: record?.PROFESION,

            DEPARTAMENTO: record?.DEPARTAMENTO,

            MUNICIPIO: record?.MUNICIPIO,

            DUI: record?.DUI,

            PLANTILLA: record?.PLANTILLA,

            USUARIO: store.state.authentication?.cuenta?.slpcode
        },

        config: {

            responseType: 'blob',

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostRecibo(record) {

    const data = {

        body: {

            SOCIEDAD: record?.SOCIEDAD,

            NOMBRE: record?.NOMBRE,

            VALOR: record?.VALOR,

            TIPOPAGO: record?.TIPOPAGO,

            ENTREGADO: record?.ENTREGADO,

            COMENTARIO: record?.COMENTARIO,

            SUCURSAL: store.state.authentication?.cuenta?.sucursal
        },

        config: {

            responseType: 'blob',

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostUsuario(record) {

    const data = {

        body: {

            NOMBRE: record?.NOMBRE,

            USUARIO: record?.USUARIO,

            PASSWORD: record?.PASSWORD,

            SUCURSAL: record?.SUCURSAL,

            ROL: record?.ROL,

            ESTADO: record?.ESTADO,

            ID: record?.ID
        },

        config: {

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

function PostDescarga(record) {

    const data = {

        body: {

            RECORD: record
        },

        config: {

            responseType: 'blob',

            headers: {

                Authorization: store.state.authentication?.cuenta?.token
            }
        }
    }

    return data
}

export { getToken, getPlantilla, PostCompraVenta, PostPlantilla, PostPagare, PostPrimeraMatricula, PostRecibo, PostUsuario, PostDescarga } 