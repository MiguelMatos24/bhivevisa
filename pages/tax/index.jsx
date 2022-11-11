import Layout from "../../components/layout";
import Tax from "../../components/tax";
import Head from "next/head";

const sectionTax = () => {
  return (
    <>
      <Head>
        <title>Tax Representation</title>
      </Head>
      <Layout>
        <Tax />
      </Layout>
    </>
  );
};

export default sectionTax;
