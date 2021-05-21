
import './App.css';
import {connect,useDispatch,useSelector} from 'react-redux'
import { decrement, increment } from './js/action/counterAction';


function App(props) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
     {/* <button onClick={() => props.add(5)}>+</button> */}
     {/* <p>{props.count}</p> */}
     {/* <button onClick = {() => props.remove(3)}>-</button> */}
     <button onClick={() => dispatch(increment(2))}>+</button>
     <p>{count}</p>
     <button onClick={() => dispatch(decrement(2))}>-</button>
    </div>
  );
}
// const mapStateToProps = (state) => {
//     return {
//       count:state.count
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//  return {
//    add : (payload) => dispatch(increment(payload)),
//    remove : (payload) =>dispatch(decrement(payload)),
//  }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(App);
export default App;
