'use strict';

const app = require('./app');

const PORT = process.env.PORT || 'https://hyf-project.netlify.com';

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
