import Layout from "../../components/layout";
import Form from "../../components/form";
import Head from "next/head";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <div>
        <Layout>
          <Form />
        </Layout>
      </div>
    </>
  );
};
export default Contacts;
