import { useState } from 'react';
import st from './HomePage.module.css'
import bt from '../../Style/buttons.module.css'
import HotOffer from '../HotOffer/HotOffer';
import { useHistory } from 'react-router-dom';

const HomePage = (props) => {
    const [isOpen, setOpen] = useState(false);
    const history = useHistory();
    return (
        <div className={props.isOpen ? st.blur : st.main}>
            <div className={st.button}>
                <button className={bt.fill} onClick={() => isOpen ? setOpen(false) : setOpen(true)} >Top cocktails</button>
                {isOpen ? <HotOffer
                    isOpen={isOpen}
                    setCount={props.setCount}
                    setArrId={props.setArrId}
                    count={props.count}
                    closeModalWindow={() => setOpen(false)}
                /> : ""
                }
            </div>
            <div className={st.button1}>
                <button className={bt.pulse} onClick={() => history.push('/list/cocktails/main')}>Choose cocktail</button>
            </div>
        </div>
    );
}
export default HomePage