import "./Timeline.scss"

export default function Timeline() {
    const skipbackwardImg = require("../../../../images/Skip-Bw.svg").default;
    const playImg = require("../../../../images/Play.svg").default;
    const skipforwardImg = require("../../../../images/Skip-Fw.svg").default;
    return (
        <div className="timeline" id="timeline">
            <div className="skip-backward">
                <img src={skipbackwardImg} alt="" />
            </div>
            <div className="play">
                <img src={playImg} alt="" />
            </div>
            <div className="skip-forward">
                <img src={skipforwardImg} alt="" />
            </div>
        </div>
    )
}

