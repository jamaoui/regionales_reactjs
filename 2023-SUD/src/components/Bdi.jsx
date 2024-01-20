import {useState} from "react";

export function Bdi() {
    const [indice] = useState(26)

    const displayTitle = () => {
        if(indice>=19 && indice<=25) {
            return <div style={{color:'green'}}>Normale</div>
        } else if(indice< 19) {
            return <div style={{color:'red'}}>Sous poids</div>
        } else if(indice>25) {
            return <div style={{color:'orange'}}>surpoids</div>
        }
    }
    return (
        <>
            {displayTitle()}
        </>
    )
}