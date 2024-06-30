import { useState, useEffect } from "react";

function FetchData() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://66411982a7500fcf1a9f928c.mockapi.io/products/posts')
                const result = await response.json();
                setData(result.slice(0,3));
            } catch(error){
            } finally{
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    if (loading) {
        return <div>Load posts...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    return (
        <section className="rawPosts">
            <div className="largePost">

            </div>
            <div className="mediumPost">

            </div>
            <div className="miniPost">
                
            </div>
        </section>
    );

}

export default FetchData;