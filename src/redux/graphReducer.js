// STATE: OBJ / HASHMAP OF Repr_NODE where Repr_NODE === Array of adj nodes
const graphReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case 'RESET':
      newState = {};
      return newState;
    case 'ADD_NODE':
      const newNodeId = action.node.id;
      newState = Object.assign({}, state);
      newState[newNodeId] = [];
      return newState;
    case 'DEL_NODE':
      const delNodeId = action.node.id;
      newState = Object.assign({}, state);
      delete newState[delNodeId];
      console.log(newState, delNodeId);
      for (let node in newState) {
        const newArr = [];
        for (let i = 0; i < newState[node].length; i++) {
          if (newState.node[i] !== delNodeId) {
            newArr.push(newState.node[i]);
          }
        }
        newState[node] = newArr;
      }
      return newState;
    //case 'VISITED_NODE':
    case 'ADD_EDGE':
      const newEdge = action.edge;
      newState = Object.assign({}, state);
      newState[newEdge[0].id].push(newEdge[1].id);
      newState[newEdge[1].id].push(newEdge[0].id);
      return newState;
    case 'DEL_EDGE':
      const {nodeA, nodeB} = action.nodes;
      let newArr = state.nodeA.filter(node => node !== nodeB);
      state.nodeA = newArr;
      newArr = state.nodeB.filter(node => node !== nodeA);
      state.nodeB = newArr;
      return;
    default:
      return state;
  }
};

export default graphReducer;
