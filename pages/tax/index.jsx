import Layout from "../../components/layout";
import Tax from "../../components/tax";
import Head from "next/head";

const sectionTax = () => {
  <Head>
    <title>Tax Representation</title>
  </Head>;
  return (
    <Layout>
      <Tax />
    </Layout>
  );
};

export default sectionTax;
