import "./Tools.scss"

function Tool({id}) {
    return (
        <div className="tool" id="tool">
            <img src={require(`../../../../images/${id}.svg`)} alt="" />
        </div>
    )
};


export default function Tools() {
    return (
        <div className="tools" id="tools">
            <Tool id="Draw" />
            <Tool id="Select" />
            <Tool id="Hand" />
            <Tool id="Eraser" />
            <Tool id="Trash" />
        </div>
    )
};

