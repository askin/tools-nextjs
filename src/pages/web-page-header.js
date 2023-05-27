import Layout from "@/components/layout";
import React, {useState} from "react"
import BigContent from "@/components/BigContent";
import WebPageHeaderView from "@/components/WebPageHeaderView";

export default function Page() {
    const [webPageUrl, setWebPageUrl] = useState("");
    const [headers, setHeaders] = useState([]);

    const onFormSubmit = e => {
        e.preventDefault();
        getWebPageHeader()
    }

    function getWebPageHeader() {
        if (webPageUrl === null || webPageUrl === "") {
            alert("Url is not valid!")
            return
        }

        fetch('/api/getHeaders?' + new URLSearchParams({
            url: webPageUrl
        })).then((res) => {
            if (res.status == 200) {
                return res.json()
            } else {
                alert("Web page is not fetched!")
            }
        }).then((data) => {
            if (data === null) {
                setHeaders(data.headers);
            }
        });
    }

    return (
        <Layout title="Get Web Page Headers">
            <BigContent>
                <form onSubmit={onFormSubmit}>
                    <h1>Enter Url</h1>
                    <input type="input" className="redInput" value={webPageUrl} autocomplete="on"
                           onChange={e => {
                               setWebPageUrl(e.currentTarget.value);
                           }}
                    />
                    <input type="button" className="button" value="Get Web Page Headers" id="webpageurl" onClick={getWebPageHeader}/>
                </form>
                <WebPageHeaderView headers={headers} className="fullWidth" />
            </BigContent>
        </Layout>
    )
}