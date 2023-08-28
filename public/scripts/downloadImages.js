const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const downloadAndResizeImages = async () => {
  const baseURL = 'https://bafybeibnw2yuc7tpkt4pkzx3c2yizyjx24vioehwqodxppbqoyncyi4t44.ipfs.dweb.link/';
  const outputPath = path.join(__dirname, 'public', 'characters');
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  for (let i = 1; i <= 100; i++) {
    const imageURL = `${baseURL}${i}.gif`;
    const outputFileName = `${i}.gif`;

    try {
      const response = await axios.get(imageURL, { responseType: 'arraybuffer' });
      const resizedImageBuffer = await sharp(response.data)
        .resize(80, 80)
        .toBuffer();

      fs.writeFileSync(path.join(outputPath, outputFileName), resizedImageBuffer);
      console.log(`Image ${i}.gif downloaded and resized.`);
    } catch (error) {
      console.error(`Error downloading or resizing image ${i}.gif: ${error.message}`);
    }
  }

  console.log('All images downloaded and resized successfully.');
};

downloadAndResizeImages();
