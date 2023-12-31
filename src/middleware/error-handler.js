const { CustomApiError } = require('../errors/custom-error.js')

const errorHandlerMiddleware = (err, req, res, next) => {
    if(err instanceof CustomApiError){
        return res.status(err.statusCode).json({ msg: err.message})
    }

    return res.status(500).json({ msg: 'Algo deu errado, Tente novamente'})
}

module.exports = errorHandlerMiddleware