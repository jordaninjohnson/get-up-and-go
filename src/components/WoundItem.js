import './WoundItem.css';
import Card from './Card';
import WoundDate from './WoundDate';
function WoundItem(props) {
    return (
        <Card className="wound-item">
            <WoundDate date={props.date} />
            <div className="wound-item__description">
                <h2>{props.title}</h2>
                <div className='wound-item__price'>{props.amount}</div>
            </div>
        </Card>
    );
}

export default WoundItem;