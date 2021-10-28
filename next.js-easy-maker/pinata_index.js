import Head from "next/head";
const axios = require("axios");
// pages/apiにfetchでアクセスする方法
export const getServerSideProps = async (context) => {
  // const res = await fetch(`https://nft-next-js-hardhat-zeta.vercel.app/api/pinatatest`)
  const res = await fetch(`http://localhost:3000/api/pinataconnecttest`);
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

  return (
    <div>
      <p>{data}</p>
    </div>
  );
}
