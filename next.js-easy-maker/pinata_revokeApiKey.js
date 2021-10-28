const axios = require('axios');
// pinataのapikeyを削除
// porpsのkeyは管理者のものを使用
// revokeApiKey:https://docs.pinata.cloud/user/revoke-api-key
export const revokeApiKey = (pinataApiKey, pinataSecretApiKey, apiKey) => {
    const url = `https://api.pinata.cloud/users/revokeApiKey`;
    const body = {
        apiKey: apiKey //[ apiKey ] はporpsに渡してなければ直接文字列で入力  "2e6aabcfd5bf5dda26ae"
    };
    return axios
        .post(url, body, {
            headers: {
                pinata_api_key: pinataApiKey,
                pinata_secret_api_key: pinataSecretApiKey
                // もしくはdotenvから所得
                //   pinata_api_key: process.env.pinataAPIKey,
                //   pinata_secret_api_key: process.env.pinataAPISecret,
            }
        })
        .then(function (response) {
            //handle response here
            console.log(response);
        })
        .catch(function (error) {
            //handle error here
            console.log(error);
        });
};