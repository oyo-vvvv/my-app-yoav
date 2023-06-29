import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'
import Metier from '../../components/Metier/Metier'

const UseStateObject = () => {

    const code = `const [state, setState] = useState({
        id: 1,
        metier : "Fullstack Dev",
        Niveau : "en formation"
     });


     const handleJunior = () => {
        //   setState((prevstate)=>  ({...prevstate, Niveau: "Junior" }))
        setState((prevstate) => {
            console.log("prevstate", prevstate)
            return (
                { ...prevstate, Niveau: "Junior" }
            )
        })
    }

    const handleIntermediaire = () => {
        setState((prevstate) => ({ ...prevstate, Niveau: "Intermediaire" }))
    }
        const handleSenior = () => {
        setState((prevstate) => ({ ...prevstate, Niveau: "Senior" }))
    }`

    return (
        <>
            <NavbarOffCanva />
            <div className="">
                <div className="codeBg">
                    <pre>
                        {code}
                    </pre>
                </div>

                <Metier />
            </div>


        </>
    )
}

export default UseStateObject
