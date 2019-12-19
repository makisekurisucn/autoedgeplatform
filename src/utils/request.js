import axios from "axios";

export async function request(config) {
    let result = null;
    let { method, url, data } = config;
    await axios({
        method,
        url,
        data
    }).then((res) => {
        result = res;
    })
    console.log(result);
    return result;
}