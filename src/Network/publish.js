export default async function publish(data, itemRoute) {
    let response = await fetch('http://localhost:3001/control/publish', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
            //queue: JSON.stringify(queue)
        
    })
    response = await response.json();

    return response;
}