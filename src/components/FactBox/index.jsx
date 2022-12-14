import { useState, useEffect } from "react";

const FactBox = ({ todoCount }) => {

    const [fact, setFact] = useState("");

    useEffect(() => {
        async function getfact() {
            const res = await fetch("https://dogapi.dog/api/v2/facts?limit=1");
            const data = (await res.json())["data"][0]["attributes"]["body"];
            setFact(data);
        }
        getfact();
    }, [todoCount])

    return <div className="fact-box"><em>{fact}</em></div>

};

export default FactBox;