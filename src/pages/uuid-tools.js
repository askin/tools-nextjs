import Layout from "@/components/layout";
import {useState} from "react"
import BigContent from "@/components/BigContent";

export default function Page() {
    const onFormSubmit = e => {
        e.preventDefault();
        setResultValue(crypto.randomUUID())
    }

    const onBulkFormSubmit = e => {
        e.preventDefault();
        generateBulkUUIDv4()
    }

    const [resultValue, setResultValue] = useState(crypto.randomUUID());
    const [bulkResultValue, setBulkResultValue] = useState("");
    const [count, setCount] = useState(5);

    function generateBulkUUIDv4() {
        setBulkResultValue(
            Array(count ? count : 1)
                .fill("")
                .map(() => crypto.randomUUID())
                .join('\n'))
    }

    return (
        <Layout title="Generate UUID">
            <BigContent>
                <form onSubmit={onFormSubmit}>
                    <h1><a href="?" className="redTitle">Random UUIDv4</a>
                    </h1>
                    <input
                        type="text"
                        className="redInput"
                        value={resultValue}
                        readOnly={true}
                        onChange={e => {
                            setResultValue(e.currentTarget.value)
                        }}
                    />
                    <input type="button" className="button" value="Generate UUIDv4" onClick={() => setResultValue(crypto.randomUUID())}/>
                    <input type="button" className="button" value="Copy UUIDv4" onClick={ () => navigator.clipboard.writeText(resultValue) }/>
                </form>
            </BigContent>
            <BigContent>
                <form onSubmit={onBulkFormSubmit}>
                    <h1 className="redTitle">Generate Bulk UUIDv4</h1>
                    <input type="button" className="button" value="Generate Bulk UUIDv4" onClick={generateBulkUUIDv4}/>
                    <input type="number" className="button" min="1" max="100"
                           aria-describedby="countHelp" value={count} onChange={e => {
                            setCount(parseInt(e.currentTarget.value));
                        }}
                    />
                    <input type="button" className="button" value="Copy Bulk UUIDv4" onClick={ () => navigator.clipboard.writeText(bulkResultValue) }/>

                    <textarea cols="100" rows="10" id="dencoder" name="dencoder" value={bulkResultValue}
                              onChange={e => {
                                  setBulkResultValue(e.currentTarget.value);
                              }}
                    />
                </form>
            </BigContent>
        </Layout>
    )
}