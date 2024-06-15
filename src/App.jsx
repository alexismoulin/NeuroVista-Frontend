import { useState } from 'react';
import Intro from './components/Intro/Intro.jsx';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Copyright from './components/Copyright/Copyright.jsx';
import data from './data/cortical.json';
import "./App.css"
import "./assets/css/main.css"
import "./assets/css/fontawesome-all.min.css"
import "./assets/css/noscript.css"


const aseg = {data: data.aseg, title: "General Segmentations", headers: ["Structure", "Volume (mm3)"]}
const brain = {data: data.brain, title: "General Volumes", headers: ["Structure", "Volume (mm3)"]}
const whiteMatter = {data: data.whitematter, title: "White Matter", headers: ["Structure", "Volume (mm3)"]}
const lhsParcellation = {
    data: data.lh_dkatlas, title: "LHS Parcellations", headers: [
        "Structure", "Surface Area (mm2)", "Gray Matter Vol (mm3)", "Thickness Avg (mm)", "Mean Curvature (mm-1)"
    ]
}
const rhsParcellation = {
    data: data.rh_dkatlas, title: "RHS Parcellations", headers: [
        "Structure", "Surface Area (mm2)", "Gray Matter Vol (mm3)", "Thickness Avg (mm)", "Mean Curvature (mm-1)"
    ]
}

export default function App() {
    const [selectedData, setSelectedData] = useState(aseg);
    function handleClick(selectedTopic) {
        setSelectedData(selectedTopic)
    }
    return (
        <div id="wrapper">
            <Intro/>
            <Header/>
            <Content {...selectedData} onClick={handleClick}/>
            <Copyright/>
        </div>
    )
}