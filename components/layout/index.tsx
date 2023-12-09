// import Navbar from './navbar';
// import Footer from './footer';

import { useRouter } from "next/router";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
  const router = useRouter();

  const rtl = router.locale === "ar";

  return (
    <div dir={rtl ? "rtl" : "ltr"} className="main">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
