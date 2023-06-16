import Link from "next/link";

export default function Footer() {
    return (
        <footer className="siteFooter">
            <div align="center">
                <span title={ "Last Build: " + new Date().toISOString() }>© { new Date().getFullYear() }</span>&nbsp;
                <Link href="https://askin.ws" target="_blank">Aşkın Özgür</Link>
                &nbsp;|&nbsp;Powered by&nbsp;
                <a href="https://nextjs.org/" rel="noopener noreferrer" target="_blank">Next.js</a>
            </div>
        </footer>
    )
}