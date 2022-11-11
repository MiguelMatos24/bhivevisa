import Head from "next/head";
import Layout from "../../components/layout";
import Nomad from "../../components/nomad";

const Digital = () => {
  return (
    <>
      <Head>
        <title>Digital Nomad</title>
      </Head>
      <Layout>
        <Nomad />
      </Layout>
    </>
  );
};

export default Digital;
