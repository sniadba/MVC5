const express = require('express');
const path = require('path');
const homeRoutes = require('./routes/home');
const booksRoutes = require('./routes/books');
const authorsRoutes = require('./routes/authors');
const addRoutes = require('./routes/add-book');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(homeRoutes);
app.use(booksRoutes);
app.use(authorsRoutes);
app.use(addRoutes);

app.set('views', path.join(__dirname, 'views'));

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
