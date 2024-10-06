import RegisterForm from "@/components/RegisterSlices/RegisterForm";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import * as React from "react";

const breadcrumbs = {
  0: { title: "Home", link: "/" },
  1: { title: "Register", link: "/guest/register" },
};

const Register = () => {
  return (
    <>
      <section id="register">
        <Head>
          <title>Register</title>
        </Head>

        <div className="container mx-auto px-4 md:px-20">
          <RegisterForm />
        </div>
      </section>
    </>
  );
};

Register.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Register;
