import Layout from "@/components/layout";
import {useState} from "react"
import ToolSpacer from "@/components/toolSpacer";
import SmallContent from "@/components/SmallContent";

export default function Page() {

    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");

    const onFormSubmit = e => {
        e.preventDefault();
        timeToHuman()
    }

    function timeToHuman() {
        const unixTimeStamp = inputValue.length === 0 ? 0 : parseInt(inputValue)
        const theDate = new Date(unixTimeStamp * 1000);
        setResultValue(theDate.toGMTString())
    }

    function getNow() {
        const theDate = new Date()
        setInputValue(Math.floor(theDate.getTime() / 1000).toString())
        setResultValue(theDate.toUTCString())
    }

    return (
        <Layout title="Unix Time Conversion">
            <SmallContent>
                <form onSubmit={onFormSubmit}>
                <h1><a href="?" className="redTitle">Unix Timestamp</a></h1>
                <input
                    type="text"
                    className="redInput"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.currentTarget.value);
                    }}
                />
                <input type="button" name="button" id="timestamp" value="Convert" className="button" onClick={timeToHuman} onSubmit={timeToHuman} />
                <input type="button" name="button" id="timestamp" value="Now" className="button" onClick={getNow}/>
                </form>
            </SmallContent>
            <ToolSpacer image={false} />
            <SmallContent>
                <h1><a href="?" className="grayTitle">Date/Time</a></h1>
                <input
                    type="text"
                    className="grayInput"
                    disabled="true"
                    value={resultValue}
                />
            </SmallContent>
        </Layout>
    )
}