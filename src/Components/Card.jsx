function Card(props) {
    return (
        <div style={{ backgroundColor: props.bgcolor }}
            className="py-5 px-10 border rounded-md text-center flex-grow my-5">
            <h1 className="text-xl font-semibold">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    );
}
export default Card;
