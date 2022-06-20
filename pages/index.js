import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import TopBar from "../Components/TopBar/TopBar";
import AppBar from "../Components/AppBar/appBar";
import Hero from "../Components/Hero/Hero";
import Intro from "../Components/Intro/Intro";
import Stories from "../Components/Stories/Stories";
import WhatsNew from "../Components/WhatsNew/WhatsNew";
import Careers from "../Components/Careers/Careers";
import Form from "../Components/Form/Form";
import Footer from "../Components/Footer/Footer";
import Testimonial from "../Components/Testimonial/Testimonial";
import Counter from "../Components/Counter/Counter";
import TrustedPartners from "../Components/TrustedPartners/TrustedPartners";
export async function getServerSideProps() {
  const res = await fetch(
    `https://indegenerep.s3.ap-south-1.amazonaws.com/cdn/home.json`
  );
  const data = await res.json();
  return { props: { data } };
}
const Home = ({ data }) => {
  let datas = data[0];
  return (
    <>
      <TopBar />
      <AppBar appBar={datas.appBar} />

      <Hero hero={datas.hero} />
      <Intro intro={datas.intro} />
      <Stories services={datas.services} />
      <WhatsNew whatNew={datas.whatNew} />
      <Careers careers={datas.careers} />
      <TrustedPartners trustedPartner={datas.trustedPartner} />
      <Counter counter={datas.counter} />
      <Testimonial testimonial={datas.testimonial} />
      <Form />
      <Footer footer={datas.footer} />
    </>
  );
};
export default Home;
