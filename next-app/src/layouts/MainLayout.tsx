import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface IAppProps {
  children: ReactNode;
}

const MainLayout: React.FunctionComponent<IAppProps> = ({children}) => {
  return(
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
};

export default MainLayout;
