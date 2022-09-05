import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function logout() {

  return (
    <div>
      <Head>
        <title>Lexir - Logout </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Logout </h1>
      </div>
    </div>
  );
}

logout.PageLayout = IndexLayout;
