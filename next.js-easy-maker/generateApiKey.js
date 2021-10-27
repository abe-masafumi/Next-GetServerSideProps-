const axios = require('axios');
// pinataのapikeyを作成する
// ユーザーレンダリングで実行
export const generateApiKey = (pinataApiKey, pinataSecretApiKey) => {
  const url = `https://api.pinata.cloud/users/generateApiKey`;
  const body = {
    keyName: "testpinataipfs",
    permissions: {
      endpoints: {
        data: {
          userPinnedDataTotal: true,
        },
        pinning: {
          pinJobs: true,
          unpin: true,
          userPinPolicy: true,
        },
      },
    },
  };
  axios
    .post(url, body, {
      headers: {
        pinata_api_key: process.env.pinataAPIKey,
        pinata_secret_api_key: process.env.pinataAPISecret,
      },
    })
    .then(function (response) {
      //handle response here
      console.log(response);
    })
    .catch(function (error) {
      //handle error here
      console.log(error);
    });
}
