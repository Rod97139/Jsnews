export const loadConfig = async () => {
    let result = await fetch('../../../config.json')
    return result.json()
}