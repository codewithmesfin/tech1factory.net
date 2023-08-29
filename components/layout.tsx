import Footer from "./Footer";
import Navbar from "./navbar";




interface PROPS {
  children: any;
}

export default function Layout({ children }: PROPS) {



  return <div>
  <Navbar />
  <main className={`bg-white h-full`}>{children}</main>
  <Footer />
</div>
}
