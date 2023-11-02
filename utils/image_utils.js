export async function fetchImage(PURL) {
    const _res = await fetch(PURL)
    const data = await _res.json()
    return data
}