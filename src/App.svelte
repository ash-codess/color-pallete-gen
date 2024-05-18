<script>
	import ImageUploader from './components/ImageUploader.svelte';
	import ColorPalette from './components/ColorPalette.svelte';
	import axios from 'axios';
  
	let colorPalette = [];
  
	const generateColorPalette = async (file) => {
	  const formData = new FormData();
	  formData.append('image', file);
  
	  try {
		const response = await axios.post('http://localhost:3001/api/generate-palette', formData, {
		  headers: {
			'Content-Type': 'multipart/form-data',
		  },
		});
		colorPalette = response.data;
	  } catch (error) {
		console.error('Error generating color palette:', error);
	  }
	};
  </script>
  
  <main>
	<ImageUploader on:upload={generateColorPalette} />
	<ColorPalette colors={colorPalette} />
  </main>