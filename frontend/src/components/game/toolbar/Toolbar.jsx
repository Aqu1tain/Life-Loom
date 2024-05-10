import "./Toolbar.scss"


import Tools from "./tools/Tools"
import Timeline from "./timeline/Timeline"

export default function Toolbar() {
    return (
        <div className="toolbar" id="toolbar">
            <Tools />
            <Timeline />
        </div>
    )
}