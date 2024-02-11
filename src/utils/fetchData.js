export const url = import.meta.env.VITE_RAPID_API_URL
export const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
        'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
    }
};

export const fetchDataUtils = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}