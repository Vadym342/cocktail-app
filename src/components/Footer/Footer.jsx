import st from './Footer.module.css'
import Pagination from '../Pagination/Pagination';
import { ThemeContextConsumer } from '../../App';
const Footer = (props) => {
    return (
        <ThemeContextConsumer>
            {(theme) => (
                <div className={st.footer} style={{ backgroundColor: theme.footer }}>
                    <div>
                        <marquee className={st.ftText} style={{ color: theme.color }} behavior="alternate" direction="right" >Click on the letter and choose a cocktails</marquee>
                    </div>
                    <div className={st.pagination}>
                        <Pagination setLetter={props.setLetter} />
                    </div>
                </div>
            )}
        </ThemeContextConsumer>
    );
}
export default Footer