// Importa Axios
import axios from 'axios';

export default async (req, res) => {
  try {
    const { discordId } = req.query;

    const response = await axios.get(`https://nof.town/api/post?discordID=${discordId}`, { 'responseType': 'arraybuffer'});
    const contentType = response.headers.getContentType();
    if (contentType.startsWith('application/json')) {
      const json = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(response.data)));
      res.status(response.status).json({
        'message': json.message,
        'success': false
      });
    } else {
      const reward64 = btoa(new Uint8Array(response.data).reduce(function (data, byte) {
        return data + String.fromCharCode(byte);
      }, ''));
        res.status(response.status).json({
            'message': reward64,
            'success': true
        });
    }

  } catch (error) {
    // Maneja cualquier error que pueda ocurrir
    console.error(error);
    res.status(500).json({ error: 'Error en la llamada a la API de NOFY' });
  }
};
