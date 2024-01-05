import Like from "./Like";

export default function Carte({id, poster, title, auteur, edition}) {
    return (
        <>
            <div style={{border: '1px solid gray', borderRadius: '25px'}}>
                <img style={{
                    borderRadius: '25px 25px 0 0',
                    margin: '0 auto',
                    display: 'block',
                    height: 500,
                    width: '100%'
                }} src={poster} alt={title}/>
                <div style={{padding: '0 2rem',}}>

                    <h1>{title}</h1>
                    <h2 style={{fontSize: '1rem'}}>Auteur: {auteur}</h2>
                    <h2>Edition: {edition}</h2>
                    <h3>
                        <Like id={id}/>
                    </h3>
                </div>
            </div>
        </>
    );
}
