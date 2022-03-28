export default async function publish(data) {
    let response = await fetch('http://localhost:3001/publish', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    response = await response.json();

    return response;
}