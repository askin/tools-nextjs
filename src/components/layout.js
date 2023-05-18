import Navbar from './navbar';
import Footer from './footer';
import '../app/globals.css'

export default function Layout({ children }) {
    return (
        <div>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>
        </div>
    );
}