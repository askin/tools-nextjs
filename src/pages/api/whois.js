import whois from "whois";

export default async function handler(request, response) {
    whois.lookup(request.query.domain, function(err, data) {
        response.status(200).json({
            whoisText: data
        });
    })
}