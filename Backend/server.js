const express = require('express');
const app = express();
app.use(express.json());

// Ruta principal para la tarea
app.get('/', (req, res) => {
    res.json({
        nombre: 'Roger Alberto Rivera Alvarez',
        album_favorito: 'Vertical - Imaginate'  
    });
});

const PORT = 3000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
});