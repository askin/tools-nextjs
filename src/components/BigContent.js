export default function BigContent({ children, align=""}) {
    return (
        <div className="content-full" align={align} >
            {children}
        </div>
    );
}