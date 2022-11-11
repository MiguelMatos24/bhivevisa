import Layout from "/components/layout";
import ComponentAbout from "components/about";
import Team from "components/team";
import Head from "next/head";

const About = () => {
  <Head>
    <title>About Us</title>
  </Head>;
  return (
    <Layout>
      <ComponentAbout />
      <Team />
    </Layout>
  );
};

export default About;
