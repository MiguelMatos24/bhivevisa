import Layout from "components/layout";
import Entrepreneur from "components/entrepreneur";
import Head from "next/head";

const Refugee = () => {
  return (
    <>
      <Head>
        <title>Entrepreneurs</title>
      </Head>
      <Layout>
        <Entrepreneur />
      </Layout>
    </>
  );
};

export default Refugee;
