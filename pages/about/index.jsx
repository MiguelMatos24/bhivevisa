import Layout from "/components/layout";
import ComponentAbout from "components/about";
import Team from "components/team";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Layout>
        <ComponentAbout />
        <Team />
      </Layout>
    </>
  );
};

export default About;
