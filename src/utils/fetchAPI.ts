const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiCall = async(
    endPoint: string,
    method: string,
    data: any = null,
) => {
    try{
        const response = await fetch(`${API_BASE_URL}${endPoint}`,{
            method,
            headers: {
                'Content-Type': 'text/plain; charset=utf-8',
            },
            body: data ? JSON.stringify(data) : null
        });
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json()
    } catch(error){
        console.error('API call error:', error);
        throw error;
    }
};
