import axios from 'axios';

async function getNostalgicPhoto() {
    console.log('Making a request to Flickr API...');
    try {
        const response = await axios.get(
            'https://api.flickr.com/services/rest/', {
                params: {
                    method: 'flickr.photos.search',
                    api_key: process.env.FLICKR_API_KEY,
                    text: 'chameleon',
                    format: 'json',
                    nojsoncallback: 1,
                    per_page: 1,
                    page: 1,
                    min_taken_date: 946717254,
                    max_taken_date: 1357030854,
                },
                headers: {
                    'User-Agent': 'PostmanRuntime/7.29.2'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching nostalgic photo:', error.message);
        throw error; // Re-throw error for further handling
    }
}

export default getNostalgicPhoto