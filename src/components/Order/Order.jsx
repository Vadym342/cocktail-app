import ReactDOM from "react-dom";
import st from './Order.module.css'
import bt from '../../Style/buttons.module.css'

const Order = (props) => {
    function submit(props) {
        props.closeModalWindow();
        console.log("Order :")
        console.log(props.arr);
        props.setCount(0);
        props.setArrId([]);
    }
    function filter(id) {
        props.setArrId((state) => {
            const find = state.find(el => el.id === id);
            if (find && find.count>1) {
                return state.map(el => el.id === id ? { ...el, count: el.count - 1 } : el)
            }
            return state.filter(el => el.id !== id);
        })
    }
    return props.isOpen && ReactDOM.createPortal(
        <div className={st.modal}>
            <div className={st.title}>
                <h3>Your Order</h3>
            </div>
            <div className={st.btn}>
                <button className={bt.raise} onClick={props.closeModalWindow}>Close order</button>
            </div>
            <div className={st.blockOrder}>
                <ol className={st.item}>
                    {
                        props.arr.map(el => (
                            <li key={el.id}>{el.name} <span>{el.count}</span><span onClick={() => filter(el.id)}>Delete</span></li>
                        ))
                    }
                </ol>
            </div>
            <div className={st.btn}>
                <button className={bt.raise} onClick={() => submit(props)}>Сonfirm order</button>
            </div>
        </div >, document.getElementById('modal')
    );
}
export default Order