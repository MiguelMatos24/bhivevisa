import Layout from "../components/layout";
import Form from "../components/form";
import Section from "components/section";
import Head from "next/head";
import Investment from "components/investment";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bhive Visa</title>
      </Head>
      <Layout>
        <div>
          <Section />
        </div>
        <div>
          <Investment />
        </div>
        <div>
          <Form />
        </div>
      </Layout>
    </div>
  );
}
