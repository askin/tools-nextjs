import Layout from "@/components/layout";
import {useState} from "react"
import Header from "@/components/header";

export default function Page() {
    const [inputValue, setInputValue] = useState("");

    function decodeURL() {
        try {
            const result = decodeURIComponent(inputValue.replace(/\+/g,  " "));
            setInputValue(result)
        } catch {}
    }

    function encodeURL() {
        const result = encodeURIComponent(inputValue);
        setInputValue(result)
    }

    return (
        <Layout>
            <Header title="Decode / Encode URL" />
            <div className="content-3in1">
                <form>
                    <h1>enter url</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" value="Decode" onClick={decodeURL} />
                    <input type="button" value="Encode" onClick={encodeURL}/>
                </form>
            </div>
        </Layout>
    )
}