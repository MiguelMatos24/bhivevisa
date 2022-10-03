import Layout from "../components/layout";
import Form from "../components/form";
import Section from "components/section";
import About from "components/about";
import Investment from "components/investment";

export default function Home() {
  return (
    <Layout>
      <div>
        <Section />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Investment />
      </div>
      <div>
        <Form />
      </div>
    </Layout>
  );
}
