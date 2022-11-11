import Layout from "../../components/layout";
import Income from "components/income";
import Head from "next/head";

const Retirement = () => {
  return (
    <>
      <Head>
        <title>Retirement & Own Income</title>
      </Head>
      <Layout>
        <Income />
      </Layout>
    </>
  );
};

export default Retirement;
