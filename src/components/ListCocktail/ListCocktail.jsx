import { useListItems, useCocktailByName } from "../../Api/data-api";
import Cocktail from "../Cocktail/Cocktail";
import st from './ListCocktail.module.css';
import { useParams } from 'react-router-dom';
import Pagination from "../Pagination/Pagination";

const ListCocktail = (props) => {
    const params = useParams('slug');
    const { listFilter } = useListItems(props.letter);
    const { cocktail } = useCocktailByName(props.text);
    return (
        <div className={props.isOpen ? st.blur : st.main}>
            <div className={st.stContent} >
                <div className={st.pag}>
                    <Pagination setLetter={props.setLetter} />
                </div>
                <div className={st.MyCard} >
                    {params.slug === params.slug.toUpperCase() ?
                        cocktail.map(cocktail => (
                            <Cocktail
                                key={cocktail.idDrink}
                                {...cocktail}
                                setCount={props.setCount}
                                setArrId={props.setArrId}
                                count={props.count}
                                arrId={props.arrId}
                                />
                        ))
                        : ""
                    }
                </div>
                <div className={st.MyCard} >
                    {params.slug === params.slug.toLowerCase() ?
                        listFilter.map(cocktail => (
                            <Cocktail
                                setCount={props.setCount}
                                setArrId={props.setArrId}
                                count={props.count}
                                key={cocktail.idDrink}
                                arrId={props.arrId}
                                {...cocktail} />
                        ))
                        : ""
                    }
                </div>
            </div>
        </div>
    );
}
export default ListCocktail