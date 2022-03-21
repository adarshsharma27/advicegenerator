import { React, useState, useEffect } from "react";

import "./Quotes.css";
const Quotes = () => {
    const [advices, setAdvices] = useState([]);
    const getQuotes = async () => {
        const url = `https://api.adviceslip.com/advice`;
        const response = await fetch(url);
        const data = await response.json();
        setAdvices(data.slip);
    };
    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <>
            <div className="cards">
                <div className="container">
                    <h2>Advice#{advices.id}</h2>
                    <p>"{advices.advice}"</p>
                    <picture>
                        <source media="(min-width: 768px)" srcSet="./images/pattern-divider-desktop.svg" />
                        <img src="./images/pattern-divider-mobile.svg" alt="divider" />
                    </picture>

                    <button className=" btn btn-primary" onClick={getQuotes}>
                        <img src="./images/icon-dice.svg" alt="dice" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Quotes;
