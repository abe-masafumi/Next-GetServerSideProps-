import Head from "next/head";
// const fs = require("fs");
// ファイルのアクセス権限を[ 書き込み ]に変更する
export const getServerSideProps = async (context) => {
  // const pinataSDK = require("@pinata/sdk");
  // const pinata = pinataSDK(
  //   process.env.pinataAPIKey,
  //   process.env.pinataAPISecret
  // );

  // const res = await fetch(`https://nft-next-js-hardhat-zeta.vercel.app/api/pinatatest`)
  const res = await fetch(`http://localhost:3000/api/hello`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
};

export default function Home(data) {
  console.log(data);
  const axios = require("axios");
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  const JSONBody = {
    "descriptiontest": "first commit",
    "imagetest": "https://nextjs-anifo.vercel.app/NFTimg/tarker.jpg",
    "nametest": "abetter"
    }
  axios
    .post(url, JSONBody, {
      name: "kononame",
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full"></div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
