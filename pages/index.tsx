import Image from "next/image";
import Header from '../components/layouts/Header'
import Head from 'next/head'
import { Button } from "@mui/material";

export default function Home() {
  return (
    <>
      <Head>
          <title>Satner qPortfolio</title>
      </Head>
      <Header />
      <Button>okokok</Button>
    </>
  );
}
