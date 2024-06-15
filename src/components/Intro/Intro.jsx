import "./Intro.css"

export default function Intro() {
    return (
        <div id="intro">
            <h1>Results Analysis</h1>
            <p>MRI Analysis Results for Patient Serie</p>
            <ul className="actions">
                <li><a href="#header" className="button icon solid solo fa-arrow-down scrolly">Continue</a></li>
            </ul>
        </div>
    );
}