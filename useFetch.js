const useFetch = async (url, setState,setState2,setLoading, setError) => {
    setLoading(true);
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        setState(data);
        setState2(data[0]);
        setLoading(false);
    }
    catch (error) {
        setLoading(false)
        setError(true);
        console.error(error);
    }
}

export default useFetch

