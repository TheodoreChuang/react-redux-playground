//// Redux Flow: Action Creator -> Action -> dispatch (connect) -> Reducers -> State ////
//// Example model after Insurance company

//// Action Creators, return an Action ////

const createPolicy = (name, premium) => {
  return {
    type: "CREATE_POLICY",
    payload: { name, premium }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: { name }
  };
};

const createClaim = (name, payout) => {
  return {
    type: "CREATE_CLAIM",
    payload: { name, payout }
  };
};

//// Reducers ////

const claimsHistory = (currentListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...currentListOfClaims, action.payload];
  }
  return action.payload;
};

const accounting = (currentCashBalance = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return currentCashBalance - action.payload.payout;
  } else if (action.type === "CREATE_POLICY") {
    return currentCashBalance + action.payload.premium;
  }

  return currentCashBalance;
};

const policies = (currentListOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...currentListOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLCY") {
    return currentListOfPolicies.filter(name => name !== action.payload.name);
  }

  return currentListOfPolicies;
};

//// Assume Redux is imported ////
console.log(redux);

const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  // storeKey: reducerFunctions
  claimsHistory: claimsHistory,
  accounting: accounting,
  policies: policies
});

const store = createStore(ourDepartments);

//// Example Usage ////

// returns an object but not connected to state/store
createPolicy("Alex", 20);

store.dispatch(createPolicy("Alex", 20));
store.dispatch(createPolicy("Bianca", 20));

store.dispatch(createClaim("Alex", 100));

store.dispatch(deletePolicy("Bianca", 100));

console.log(store.getState());

//// Example 2: Counter ////

// Action Creators - You don't need to change these
const increment = () => ({ type: "increment" });
const decrement = () => ({ type: "decrement" });

const Counter = props => {
  return (
    <div>
      <button onClick={props.increment} className="increment">
        Increment
      </button>
      <button onClick={props.decrement} className="decrement">
        Decrement
      </button>
      Current Count: <span>{props.count}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return { count: state.count };
};

const WrappedCounter = ReactRedux.connect(mapStateToProps, {
  increment,
  decrement
})(Counter);

const store = Redux.createStore(
  Redux.combineReducers({
    count: (count = 0, action) => {
      if (action.type === "increment") {
        return count + 1;
      } else if (action.type === "decrement") {
        return count - 1;
      } else {
        return count;
      }
    }
  })
);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <WrappedCounter />
  </ReactRedux.Provider>,
  document.querySelector("#root")
);

<div id="root" />;
