import Layout from "@/components/layout";
import React, {useState} from "react"
import BigContent from "@/components/BigContent";

export default function Page() {
    const [domain, setDomain] = useState("");
    const [whoisText, setWhoisText] = useState([]);

    const onFormSubmit = e => {
        e.preventDefault();
        whois()
    }

    function whois() {
        if (domain === null || domain === "") {
            alert("Domain is not valid!")
            return
        }

        fetch('/api/whois?' + new URLSearchParams({
            domain: domain
        })).then((res) => {
            if (res.status == 200) {
                return res.json()
            } else {
                alert("Whois not found!")
            }
        }).then((data) => {
            if (data !== null) {
                setWhoisText(data.whoisText);
            }
        });
    }

    return (
        <Layout title="Who is">
            <BigContent>
                <form onSubmit={onFormSubmit}>
                    <h1>Enter Domain</h1>
                    <input type="input" className="redInput" value={domain} autocomplete="on"
                           onChange={e => {
                               setDomain(e.currentTarget.value);
                           }}
                    />
                    <input type="button" className="button" value="Who is?" id="webpageurl" onClick={whois}/>
                </form>
                <pre className="borderedView">{whoisText}</pre>
            </BigContent>
        </Layout>
    )
}