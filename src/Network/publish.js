export default async function publish(data, queue) {
    let response = await fetch('http://localhost:3001/control/publish', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            data: JSON.stringify(data),
            queue: queue
        }
    })
    response = await response.json();

    return response;
}