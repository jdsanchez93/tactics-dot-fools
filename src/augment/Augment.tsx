import './Augment.css';

export function Augment(props: any) {

    return (
        <div>
            <h1 className='header'>augment</h1>
            <div>{props.name}</div>
            <img src={props.url}></img>
        </div>
    );
}