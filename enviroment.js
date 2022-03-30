export default function getEnviroment() {
    const env = 'dev'
    if(env == 'dev') {
        return 'http://localhost:3001'
    } else {
        return ''
    }
}