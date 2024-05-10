import Grid from "./grid/Grid"
import Toolbar from "./toolbar/Toolbar"

import "./Game.scss"

export default function Game() {
    return (
        <div className="game" id="game">
            <Grid />
            <Toolbar />
        </div>
    )
}