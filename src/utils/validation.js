
export const MARCA_MAX_LENGTH = 30
export const MODELO_MAX_LENGTH = 30
export const PRECIO_MIN = 0

export const isEmail = (str) => (/\S+@\S+\.\S+/.test(str))
export const isAlphanumeric = (str) => (/^[A-Za-z0-9]*$/.test(str))
export const isWithinLimit = (str, minLength = 0, maxLength = 1000) => {
    const regex = new RegExp(`^.{${minLength},${maxLength}}$`);
    return regex.test(str)
}
export const containsNumbers = (str) => (/\d/.test(str));
export const validateErrors = (errors) => {
    for (const error in errors)
        if (errors[error] !== "")
            return false
    return true
}


export const validateMarca = (marca) => (
    isWithinLimit(marca, 0, MARCA_MAX_LENGTH)
) 

export const validateModelo = (modelo) => (
    isWithinLimit(modelo, 0, MODELO_MAX_LENGTH)
) 

export const validatePrecio = (precio) => (
    Number(precio) >= PRECIO_MIN
)