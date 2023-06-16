import Layout from "@/components/layout";
import {useState} from "react"

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("Empty");
    const [resultClass, setResultClass] = useState("grayTitle");

    const onFormSubmit = e => {
        e.preventDefault();
        validateTckn(inputValue)
    }

    function generateTckn(copy) {
        let tmpTckn = "" + Math.floor(Math.random() * 10000000000000000)
        let splitTckn = tmpTckn.split("").map(numStr => parseInt(numStr)).slice(0, 9);
        let oddTotal = splitTckn
            .slice(0, 9)
            .filter((item, id) => id % 2 === 0)
            .reduce((partialSum, item) => partialSum + item, 0)

        let evenTotal = splitTckn
            .slice(0, 9)
            .filter((item, id) => id % 2 === 1)
            .reduce((partialSum, item) => partialSum + item, 0)

        let oddCalculation = ((oddTotal * 7) - evenTotal) % 10;
        splitTckn.push(oddCalculation);

        let first10Total = splitTckn.slice(0, 10).reduce((a, b) => a + b, 0);
        splitTckn.push(first10Total % 10);

        let tckn = splitTckn.join("");

        setInputValue(tckn)
        validateTckn(tckn);

        if (copy) {
            navigator.clipboard.writeText(tckn).then()
        }
    }

    function validateTckn(tckn) {
        if (tckn.length === 0) {
            setResultValue("Empty");
            setResultClass("grayTitle")
        } else {
            let result = checkTckn(tckn);
            if (result) {
                setResultValue("Valid");
                setResultClass("greenTitle")
            } else {
                setResultValue("Not Valid");
                setResultClass("redTitle")
            }
        }
    }

    function checkTckn(tckn) {
        if (tckn.length !== 11) {
            return false;
        }

        // Test is numeric
        if (!/^\d+$/.test(tckn)) {
            return false;
        }

        if (tckn[0] === "0") {
            return false;
        }

        let splitTckn = tckn.split("").map(numStr => parseInt(numStr));

        let oddTotal = splitTckn
            .slice(0, 9)
            .filter((item, id) => id % 2 === 0)
            .reduce((partialSum, item) => partialSum + item, 0)

        let evenTotal = splitTckn
            .slice(0, 9)
            .filter((item, id) => id % 2 === 1)
            .reduce((partialSum, item) => partialSum + item, 0)

        let oddCalculation = ((oddTotal * 7) - evenTotal) % 10;
        if (oddCalculation !== splitTckn[9]) {
            return false;
        }

        let first10Total = splitTckn.slice(0, 10).reduce((a, b) => a + b, 0);
        return first10Total % 10 === splitTckn[10];
    }

    return (
        <Layout title="Validate and Generate TCKN">
            <div className="content-full">
                <form onSubmit={onFormSubmit}>
                    <h1><a href="?" className="redTitle">Enter TCKN</a>
                    </h1>
                    <input
                        type="text"
                        className="redInput"
                        value={inputValue}
                        onChange={e => {
                            setInputValue(e.currentTarget.value);
                        }}
                    />
                    <input type="button" className="button" value="Generate TCKN" onClick={() =>  generateTckn(false) }/>
                    <input type="button" className="button" value="Generate and Copy TCKN" onClick={() => generateTckn(true) } />
                    <input type="button" className="button" value="Validate TCKN" onClick={() => validateTckn(inputValue) }/>

                    <h1 className="redTitle">
                        TCKN is: <span className={resultClass} id="validation">{resultValue}</span>
                    </h1>
                </form>
            </div>
        </Layout>
    )
}