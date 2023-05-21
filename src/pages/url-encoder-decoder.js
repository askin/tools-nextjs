import Layout from "@/components/layout";
import {useState} from "react"
import BigContent from "@/components/BigContent";

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
        <Layout title="Decode / Encode URL">
            <BigContent>
                <form>
                    <h1>enter url</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" className="button" value="Decode" onClick={decodeURL} />
                    <input type="button" className="button" value="Encode" onClick={encodeURL}/>
                </form>
            </BigContent>
        </Layout>
    )
}