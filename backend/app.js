const express = require('express');
const app = express();
const slotRoutes = require('./routes/slotRoutes');

app.use(express.json());
app.use('/api/slots', slotRoutes);

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
