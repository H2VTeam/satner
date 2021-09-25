import Image from "next/image";
import Header from '../components/layouts/Header'
import Head from 'next/head'
import { Button, Form } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
          <title>Satner Portfolio</title>
      </Head>
      <Header />
    </>
  );
}
