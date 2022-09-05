import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function brands() {

  return (
    <div>
      <Head>
        <title>Lexir - Brands </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Brands </h1>
      </div>
    </div>
  );
}

brands.PageLayout = IndexLayout;
