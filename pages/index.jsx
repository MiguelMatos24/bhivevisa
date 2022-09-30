import Layout from "../components/layout";
import Form from "../components/form";
import Section from "components/section";
import About from "components/about";
export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div>
          <Section />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </Layout>
  );
}
