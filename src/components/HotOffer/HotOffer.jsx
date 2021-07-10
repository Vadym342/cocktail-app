import st from './HotOffer.module.css'
import { useCocktailByName } from "../../Api/data-api";
import Cocktail from "../Cocktail/Cocktail";
const HotOffer = (props) => {
    const { cocktail } = useCocktailByName("Gin Sour");
    let obj = {};
    if ( cocktail.length>0) {
        obj = cocktail[0];
    }
    return (
        <div className={st.bg}>
            <div>
                {
                        <Cocktail
                            key={obj.idDrink}
                            {...obj}
                            count={props.count}
                            setCount={props.setCount}
                            setArrId={props.setArrId}
                        />
                }
            </div>
        </div>
    );
}
export default HotOffer;