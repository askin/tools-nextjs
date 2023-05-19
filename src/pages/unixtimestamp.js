import Layout from "@/components/layout";
import {useState} from "react"
import ToolSpacer from "@/components/toolSpacer";

export default function Page() {

    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("");

    const onFormSubmit = e => {
        e.preventDefault();
        timeToHuman()
    }

    function timeToHuman() {
        var unixTimeStamp = inputValue.length === 0 ? 0 : parseInt(inputValue)
        var theDate = new Date(unixTimeStamp * 1000);
        setResultValue(theDate.toGMTString())
    }

    function getNow() {
        var theDate = new Date()
        setInputValue(Math.ceil(theDate.getTime() / 1000))
        setResultValue(theDate.toGMTString())
    }

    return (
        <Layout>

            <div className="content-3in1">
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
                <br/>
                <br/>
                <input type="button" name="button" id="timestamp" value="Convert" className="button" onClick={timeToHuman} onSubmit={timeToHuman} />
                {' '}
                <input type="button" name="button" id="timestamp" value="Now" className="button" onClick={getNow}/>
                </form>
            </div>
            <ToolSpacer image={false} />
            <div className="content-3in1">
                <h1><a href="?" className="grayTitle">Date/Time</a></h1>
                <input
                    type="text"
                    className="grayInput"
                    disabled="true"
                    value={resultValue}
                />
            </div>
        </Layout>
    )
}