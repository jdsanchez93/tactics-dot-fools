import './Augment.css';

export function Augment(props: any) {

    return (
        <div>
            <h1 className='header'>augment</h1>
            <p className='header'>{props.name}</p>
            <img src={props.url}></img>
        </div>
    );
}