import Link from "next/link";

export default function Navbar() {
    return (
        <div align="center" className="siteHeader">
            <br/>
            <span className="navigationButton">
                <Link href="/">~/tools</Link>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                </span>
            <a href="#" className="siteNameButton">kelebek&apos;s tools</a>
            <span className="navigationButton">
                    &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a href="https://askin.ws">~/askin</a>
                </span>
        </div>
    )
}