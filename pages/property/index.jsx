import Layout from "../../components/layout";
import ComponentProperty from "components/property";
import Head from "next/head";

const Property = () => {
  return (
    <>
      <Head>
        <title>Property Management</title>
      </Head>
      <Layout>
        <ComponentProperty />
      </Layout>
    </>
  );
};

export default Property;
