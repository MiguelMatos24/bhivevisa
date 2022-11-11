import Layout from "../../components/layout";
import Citizens from "../../components/citizens";
import Head from "next/head";

const Citizenship = () => {
  return (
    <>
      <Head>
        <title>Citizenship</title>
      </Head>
      <Layout>
        <Citizens />
      </Layout>
    </>
  );
};

export default Citizenship;
