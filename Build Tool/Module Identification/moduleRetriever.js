export async function retrieveModuleData(course) {
    const res = await fetch('http://localhost:3001')
    const data = await res.json()

}
