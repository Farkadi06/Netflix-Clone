import React from 'react'
import "./Banner.css"

function Banner() {
    function truncate(string, n){
        return string?.length > n ? string.substr(0,n-1) + "...." : string;
    }

    return (
        <div>
            <header
            className="Banner" 
            style={{
                backgroundSize : "cover",
                backgroundImage : `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
                backgroundPosition : "center center"
            }
            }>
                <div className="Banner__content">
                    <h1 className="banner__title">Movie Name</h1>
                    <div className="Banner_buttons">
                        <button className="Banner__button">Play</button>
                        <button className="Banner__button">My list</button>
                    </div>
                    <h1 className="Banner__description">
                        {truncate(
                            `Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6
                            Testez le nouveau système multiplateforme PowerShell https://aka.ms/pscore6`,150)}</h1>
                </div>
                <div className="Banner--fadeButton"/>
            </header>
        </div>
    )
}

export default Banner
