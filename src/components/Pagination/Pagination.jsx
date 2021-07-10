import { Link } from 'react-router-dom';
import st from './Pagination.module.css';
import { ThemeContextConsumer } from "../../App";
const Pagination = (props) => 
{
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return (
        <ThemeContextConsumer>
            {(theme) => (
                <div className={st.letters}>
                    {
                        alphabet.map(letter => (
                            <div key={letter}>
                                {<Link className={st.lettersSt} style={{ color: theme.colorPag }}
                                    onClick={() => props.setLetter(letter)} to={`/list/cocktails/${letter}`} >{letter}</Link>}
                            </div>
                        ))
                    }
                </div>
            )}
        </ThemeContextConsumer>
    )
}
export default Pagination