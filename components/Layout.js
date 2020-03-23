import Header from "./Header";
import Footer from "./Footer";

export default function(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
