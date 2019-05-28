import React from 'react';
import Avatar from 'components/ui/Avatar';

export default function(props) {
  const borderColor = props.selected ? 'clrBr3' : 'clrBr';
  const activeClass = props.selected ? 'active' : '';

  return (
    <div
      className={ `ChatHead flexVCent gutterHSm ${activeClass}` }
      onClick={props.onClick}
    >
      <div className="flexNoShrink">
        <Avatar
          size="medium"
          avatarHashes={props.avatarHashes}
        />
      </div>
      <div className="flexExpand">
        <div className={`ChatHead-textContent flexVCent gutterHSm border padSm clrP ${borderColor}`}>
          <div className="ChatHead-name flexNoShrink clamp">{props.name}</div>
          <div className="clamp flexExpand">{props.lastMessage}</div>
        </div>
      </div>
    </div>
  );
}