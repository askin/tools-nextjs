import Layout from "@/components/layout";
import {useState} from "react"
import Header from "@/components/header"

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const [resultValue, setResultValue] = useState("Empty");
    const [resultClass, setResultClass] = useState("grayTitle");

    const onFormSubmit = e => {
        e.preventDefault();
        validateTckn()
    }

    function generateTckn(copy) {
        let tmpTckn = "" + Math.floor(Math.random() * 10000000000000000)
        let splitTckn = tmpTckn.substr(0, 9).split("").map(numStr => parseInt(numStr));

        let oddTotal = splitTckn[0] + splitTckn[2] + splitTckn[4] + splitTckn[6] + splitTckn[8];
        let evenTotal = splitTckn[1] + splitTckn[3] + splitTckn[5] + splitTckn[7];

        let oddCalculation = ((oddTotal * 7) - evenTotal) % 10;
        splitTckn.push(oddCalculation);

        let first10Total = splitTckn.slice(0, 10).reduce((a, b) => a + b, 0);
        splitTckn.push(first10Total % 10);

        let tckn = splitTckn.join("");

        setInputValue(tckn)
        validateTckn(tckn);

        if (copy) {
            navigator.clipboard.writeText(tckn)
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

        let oddTotal = splitTckn[0] + splitTckn[2] + splitTckn[4] + splitTckn[6] + splitTckn[8];
        let evenTotal = splitTckn[1] + splitTckn[3] + splitTckn[5] + splitTckn[7];

        let oddCalculation = ((oddTotal * 7) - evenTotal) % 10;
        if (oddCalculation !== splitTckn[9]) {
            return false;
        }

        let first10Total = splitTckn.slice(0, 10).reduce((a, b) => a + b, 0);
        if (first10Total % 10 !== splitTckn[10]) {
            return false
        }

        return true;
    }

    return (
        <Layout>
            <Header title="Validate and Generate TCKN" />
            <form onSubmit={onFormSubmit}>
                <h1><a href="?" className="redTitle">Enter TCKN</a>
                </h1>
                <input
                    type="text"
                    className="redInput bigInput"
                    value={inputValue}
                    onChange={e => {
                        setInputValue(e.currentTarget.value);
                    }}
                />

                <h1 className="redTitle">
                    TCKN is: <span className={resultClass} id="validation">{resultValue}</span>
                </h1>
                <input type="button" value="Generate TCKN" onClick={() =>  generateTckn(false) }/>
                <input type="button" value="Generate and Copy TCKN" onClick={() => generateTckn(true) } />
                <input type="button" value="Validate TCKN" onClick={() => validateTckn(inputValue) }/>
            </form>
        </Layout>
    )
}