import React from 'react';
import CircleIcon from './CircleIcon';

function GraphNode(props) {
  const x = props.x - 50;
  const y = props.y - 50;
  /*
    borderStyle: 'solid',
    borderRadius: '50%',
    borderColor: 'yellow',
    */
  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${y}px`,
      }}
      key={props.index}
      onClick={props.onClick}>
        <div style={{textAlign:'center'}}>{props.index}</div>
      <CircleIcon isNeighbor={props.isNeighbor} isStart={props.isStart} isEnd={props.isEnd} selected={props.selected} />
    </div>
  );
}

export default GraphNode;
