import MainLayout from "@/layouts/MainLayout";
import { ReactNode } from "react";

const Home = () => {
  return <div>بنام خدا</div>;
};

Home.getLayout = (page: ReactNode) => {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
