export default function counter(state = 0, action) {
  switch (action.type) {
   case 'INCREMENT':
    console.log("inc");
    return state + 1
   case 'DECREMENT':
    return state - 1
   default:
    return state
  }
}
