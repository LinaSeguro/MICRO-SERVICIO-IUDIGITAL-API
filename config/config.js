require('dotenv').config();

const { MONGODB_URI_LOCAL, MONGODB_URI_DOCKER, PORT } = process.env;

module.exports = {
  getMongoURI: function() {
    if (process.env.NODE_ENV === 'docker') {
      return MONGODB_URI_DOCKER;
    }
    return MONGODB_URI_LOCAL;
  },
  PORT: PORT || 4200
  
};

console.log('Configuración cargada exitosamente.');
