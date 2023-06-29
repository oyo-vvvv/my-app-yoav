import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { RevolvingDot } from 'react-loader-spinner';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, seterror] = useState();
    const [nathan] = useState("nathan a compris");

    useEffect(() => {
        // etat de depart
        setLoading(<RevolvingDot
            height="100"
            width="100"
            radius="6"
            color="#4fa94d"
            secondaryColor=''
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          /> )
        setData(null)
        seterror(null)

        axios.get(url)
            .then(res => {
                if (res.data.Table) {
                    setData(res.data.Table)
                } else {
                    seterror("il y'a un probleme")
                }

            })
            .catch(err => {
                console.log(err)
                seterror("il y'a un probleme")
            })

    }, [url]);

    return { data, loading , error, nathan}
}

export default useFetch
