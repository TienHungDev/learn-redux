import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc } from "./store/actions/counterActions";

function App() {
    const dispatch = useDispatch();
    const { counter } = useSelector((state) => state.counter);
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <p style={{ margin: "1rem" }}>{counter}</p>
                <button onClick={() => dispatch(inc())}> Add + 1 </button>
                <div>test commit 123</div>
                <div>Hung test</div>
                <div>Tran Tien Hung</div>
            </div>
        </div>
    );
}
export default App;
