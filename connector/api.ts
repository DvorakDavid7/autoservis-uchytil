// export const API_ENDPOINT = "https://dvorakdavid.info"
export const API_ENDPOINT = "http://localhost:8000"

export async function getAllReservations() {
    const response = await fetch(`${API_ENDPOINT}/api/reservation/all`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    })

    return await response.json()
}