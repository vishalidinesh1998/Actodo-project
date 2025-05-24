function Todoitem(props) {

    const activityarr = props.activityArr
    const setactivityArry = props.setactivityArry

    function handledelet(clickedid) {
        var temparr = activityarr.filter(function (item) {
            if (item.id === clickedid) {
                return false
            }
            else {
                return true
            }
        })
        setactivityArry(temparr)
    }

    return (
        <div className="flex justify-between">
            <p>{props.index + 1}. {props.activity}</p>
            <button className="text-red-600" onClick={() => { handledelet(props.id) }}>Delete</button>
        </div>
    );
}

export default Todoitem;
