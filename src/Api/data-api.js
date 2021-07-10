import { useState, useEffect } from 'react'

export const useListItems = (filter) => {
    const [listFilter, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
            try {
                const res = await fetch(`${baseUrl}search.php?f=${filter}`);
                const data = await res.json();
                if (data.drinks === null) {
                    this.filter = "a";
                }
                setData(data.drinks);
            } catch (err) {
                console.log("Error", err);
            }
        }
        fetchData();
    }, [filter])
    return { listFilter };
}

export const useCocktailByName = (filter) => {
    const [cocktail, setCockTail] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/";
            try {
                const res = await fetch(`${baseUrl}search.php?s=${filter}`);
                const data = await res.json();
                if (data.drinks === null) {
                    this.filter = "ABC";
                }
                setCockTail(data.drinks);
            } catch (err) {
                console.log("Error", err);
            }
        }
        fetchData();
    }, [filter])
    return { cocktail };
}

export const useCocktailById = (id) => {
    const [cocktailID, setCockTail] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?";
            try {
                const res = await fetch(`${baseUrl}i=${id}`);
                const data = await res.json();
                if (data.drinks === null) {
                    alert("Not found try, again")

                }
                setCockTail(data.drinks);
            } catch (err) {
                console.log("Error", err);
            }
        }
        fetchData();
    }, [id])
    return { cocktailID };
}

