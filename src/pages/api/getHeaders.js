export default async function handler(request, response) {
    const webResponse = await fetch(request.query.url);

    const headerResponse = [];
    webResponse.headers.forEach((value, key) => {
        headerResponse.push({key: key, value: value})
    })

    response.status(200).json({
        headers: headerResponse
    });
}