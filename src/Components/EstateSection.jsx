import { useEffect, useState } from "react";
import EstateCard from "./EstateCard";

const EstateSection = () => {
    const [cards, setCards] = useState([]);

    useEffect( () => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <div className="text-center my-16">
                <h1 className="text-3xl font-semibold mb-2">Industrial Estates</h1>
                <p className="text-lg">Discover diverse industrial estates offering state-of-the-art<br /> facilities and strategic locations for optimal operational efficiency and productivity.</p>
            </div>
            {
                cards.map(card => <EstateCard key={card.id} card={card}></EstateCard>)
            }
        </div>
    );
};

export default EstateSection;