import Navbar from './navbar';
import Footer from './footer';
import '../app/globals.css'
import Header from "@/components/header";

export default function Layout({ children, title = "Kelebek's Tools" }) {
    return (
        <div>
            <Header title={title} />
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    );
}