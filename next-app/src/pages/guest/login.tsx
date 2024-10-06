import LoginForm from "@/components/LoginSlices/LoginForm";
import MainLayout from "@/layouts/MainLayout";
import Head from "next/head";
import * as React from "react";

const breadcrumbs = {
  0: { title: "Home", link: "/" },
  1: { title: "Login", link: "/guest/login" },
};

const Login = () => {
  return (
    <>
      <section id="login">
        <Head>
          <title>Login</title>
        </Head>
        
        <div className="container mx-auto px-4 md:px-20">
          <LoginForm />
        </div>
      </section>
    </>
  );
};

Login.getLayout = (page: React.ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Login;
