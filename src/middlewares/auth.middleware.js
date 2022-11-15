// Protected Path Middleware  

// 1° Revisar si existe un token
// 2° Verifica si el token pertenece a un usuario valido
// 3° Modificar el req y agregar req.user con la información desencrptada del token

const { jwtSecret } = require('../config');
const { getUserByID } = require('../users/users.controllers');

// Passport maneja estrategias para las diferentes autenticaciones 
const JwtStrategy = require('passport-jwt').Strategy

// Extrae los header de la petición
const ExtractJwt = require('passport-jwt').ExtractJwt;


// Exportando función anonima 
module.exports = (passport) => {
  const options = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret
  }
  passport.use(
    new JwtStrategy(options, async(decoded, done) => {
      // done(error, decoded)
      try {
        const response = await getUserByID(decoded.id)
        if (!response) {
          return done(null, false)
        }
        console.log('decoded JWT', decoded)
        return done(null, decoded)
      } catch (error) {
        return done(error, false)
      }
    })
  )
}

