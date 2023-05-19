import WoundItem from "./WoundItem";
import './WoundsList.css';
const WoundsList = props => {
    let woundContent = <p>No Wounds!</p>;

    if(props.items.length === 0) {
        return <h2 className="wounds-list__fallback">Found no wounds.</h2>
    }

    return <ul className="wounds-list">
        {props.items.map((wound) => (
            <WoundItem
                key={wound.id}
                title={wound.title}
                amount={wound.amount}
                date={wound.date}
            />
        ))}

    </ul>
};

export default WoundsList;