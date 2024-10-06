import dynamic from "next/dynamic";
import Form from "./Form";
import Locations from "./Locations";

const Map = dynamic(() => import("@/components/ContactUsSlices/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="contact-us-self">
      <Locations />
      <Map />
      <Form />
    </div>
  );
};

export default Page;
