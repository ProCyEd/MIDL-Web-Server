import getEnviroment from "../../enviroment";

export default async function publish(data, queue) {
    const env = getEnviroment()
    let response = await fetch(env + '/control/publish', {
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