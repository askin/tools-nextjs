import Image from "next/image";

export default function ToolSpacer() {
    return (
        <div className="content-3in1-spacer">
            <Image
                src="/images/bluespacer.gif"
                alt="background"
                width={2}
                height={120}
                priority
            />
        </div>
    );
}