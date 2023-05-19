import Layout from "@/components/layout";
import {useState} from "react"
import {useEffect} from "react"
import Header from "@/components/header";

export default function Page() {
    const [resultValue, setResultValue] = useState(null);

    useEffect(() => {
        fetch('https://ipbul.tk/txt.php')
            .then((res) => res.text())
            .then((data) => {
                setResultValue(data);
            });
    }, []);

    return (
        <Layout>
            <Header title="What is my IP?" />
            <div className="redTitle">
                <h1>Your IP is <span className="greenTitle" id="ipresult">{ resultValue }</span></h1>
            </div>
        </Layout>
    )
}