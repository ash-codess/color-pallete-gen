const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path'); // Already imported here

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/api/generate-palette', upload.single('image'), async (req, res) => {
  // ... (existing code for generating color palette)
});

// Serve Svelte app
app.use('/', express.static(path.join(__dirname, '..', 'public')));

// Catch-all route for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});