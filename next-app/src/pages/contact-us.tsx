import Page from "@/components/ContactUsSlices/Page";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import { ReactNode } from "react";

const breadcrumbs = {
  0: { title: "Home", Link: "/" },
  1: { title: "Contact Us", Link: "/contact-us" },
};

const ContactUs = () => {
  return (
    <>
      <section id="contact-us">
        <Head>
          <title>Contact Us</title>
        </Head>

        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <Page />
        </div>
      </section>
    </>
  );
};

ContactUs.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ContactUs;
