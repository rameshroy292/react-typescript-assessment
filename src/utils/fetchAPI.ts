export const apiCall = async(
    endPoint: string,
    method: string,
    data: any = null,
) => {
    try{
        const response = await fetch(`${endPoint}`,{
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
