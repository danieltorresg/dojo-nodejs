const axios = require("axios").default;
const qs = require("querystring");

const config = {
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    }
}

const getToken = async() => {
    let token;
    const promise = await axios
        .post(
            "https://accounts.spotify.com/api/token",
            qs.stringify({
                grant_type: "client_credentials",
                client_id: "253bae563a2d4f7db97823f9dbeb8094",
                client_secret: "ba1bf421ca7344e28734438997f1af02",
            }),
            config
        )
    token = promise.data;
    return token.access_token;
 }

 
module.exports = getToken;
