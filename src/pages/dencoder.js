import Layout from "@/components/layout";
import {useState} from "react"

export default function Page() {
    const [inputValue, setInputValue] = useState("");

    function decodeURL() {
        try {
            var result = decodeURIComponent(inputValue.replace(/\+/g,  " "));
            setInputValue(result)
        } catch {}
    }

    function encodeURL() {
        var result = encodeURIComponent(inputValue);
        setInputValue(result)
    }

    return (
        <Layout>
            <div className="content-3in1">
                <form onsubmit="return bomb(this);" name="myform" action="">
                    <h1>enter url</h1>
                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={inputValue}
                              onChange={e => {
                                  setInputValue(e.currentTarget.value);
                              }}
                    />
                    <input type="button" onclick="urlDecode()" value="Decode" onClick={decodeURL} />
                    <input type="button" onclick="urlEncode()" value="Encode" onClick={encodeURL}/>
                </form>
            </div>
        </Layout>
    )
}