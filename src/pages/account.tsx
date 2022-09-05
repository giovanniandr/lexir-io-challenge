import Head from "next/head";
import { IndexLayout } from "../layouts";

export default function account() {

  return (
    <div>
      <Head>
        <title>Lexir - Account </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full flex-col justify-center items-center">
            <h1> Account details </h1>
      </div>
    </div>
  );
}

account.PageLayout = IndexLayout;
