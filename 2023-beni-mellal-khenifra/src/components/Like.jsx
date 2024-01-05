import {useDispatch, useSelector} from "react-redux";

export default function Like({id}) {
    const dispatcher = useDispatch()
    const livre = useSelector(state => state.find((livre, key) => key === id))
    return (
        <>
            <div className="card">
                <button style={{
                    backgroundColor: 'royalblue',
                    border: '2px solid royalblue',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    fontSize: '1.5rem',
                    padding: '10px 20px',
                    color: 'white',
                    fontWeight: 'bold',
                }} onClick={() => {
                    dispatcher({
                        type: 'like',
                        id
                    })
                }}>

                    Like ({livre.likes})

                </button>
            </div>
        </>
    );
}
