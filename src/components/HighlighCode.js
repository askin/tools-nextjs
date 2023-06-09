import React, {useEffect, useRef} from "react";
import Prism from "prismjs";

import "prismjs/themes/prism-tomorrow.css";
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/components/prism-json.js'

import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

export default function HighlighCode({code, language}) {
    useEffect(() => {
        Prism.highlightAll();
    });

    return (
        <div className="line-numbers">
            <pre>
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
}