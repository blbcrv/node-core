const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./src/models');
const User = require('./src/models/user');
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Bienvenue sur mon serveur Express!');
});

//Base de données
sequelize.sync({ force: true })  // `force: true` est utilisé ici pour le développement, cela recrée les tables à chaque démarrage
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Failed to synchronize database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

