
function counter(state, action) {
 if( typeof(state) === 'undefined') {
  return 0;
 }

 switch (action.type) {
  case 'INCREMENT':
   return state + 1
  case 'DECREMENT':
   return state - 1
  case 'SET_TO_ZERO':
   return 0
  default:
   return state

  }
}

var store = Redux.createStore(counter);
var countVal = document.getElementById('counterClicks');
console.log("In APP JS");
function render() {
 countVal.innerHTML = store.getState().toString()
}

render()
store.subscribe(render)

document.getElementById('increment')
  .addEventListener('click', function(){
    store.dispatch({ type: 'INCREMENT' })
  })

document.getElementById('decrement')
   .addEventListener('click', function(){
     store.dispatch({ type: 'DECREMENT' })
   })

document.getElementById('setToZero')
   .addEventListener('click', function(){
     store.dispatch({ type: 'SET_TO_ZERO' })
   })
