import React from 'react'
import NavbarOffCanva from '../../components/NavbarBoot/NavbarOffCanva'

const PresUseEffect = () => {

    const code = `  
    useEffect(() => {
            // celui ci se declenche une seul fois lorsque le component est rendu
    }, []);

   
    useEffect(() => {
        // celui ci se declenche a chaque fois qu'une variable change
    }, [maVariable]);
    

    useEffect(() => {
        
        return () => console.log("démontage du component") // cette fonction se declenche lors du demontage de mon component
    }, []);
    `

    return (
        <>
            <NavbarOffCanva />
            <div className="">
                <h1>Presentation du useEffect</h1>
                <div className="codeBg">
                    <pre>{code}</pre>
                </div>
            </div>
        </>
    )
}

export default PresUseEffect
