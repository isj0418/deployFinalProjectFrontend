import React, { useState } from "react";
import KLeagueTeam from "../Kleague/KLeagueTeam";

export default function DataDisplay() {
    const [showKLeagueTeam, setShowKLeagueTeam] = useState(false);

    function toggleKLeagueTeam() {
        setShowKLeagueTeam(true);
    }

    return (
        <div>
            <div>
                <button onClick={toggleKLeagueTeam}>K-League Team</button>
            </div>
            <div>
                {showKLeagueTeam && <KLeagueTeam />}
            </div>
        </div>
    );
}
