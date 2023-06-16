import Navbar from './navbar';
import Footer from './footer';
import '../app/globals.css'
import Header from "@/components/header";
import Script from "next/script";

export default function Layout({ children, title = "Kelebek's Tools" }) {
    return (
        <div>
            <Header title={title}/>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-P9MRTTJV7S"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-P9MRTTJV7S');
        `}
            </Script>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    );
}