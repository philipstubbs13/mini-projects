"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Header = (props) => {
    return (<header>
      <h1 style={{ color: props.color ? props.color : 'blue' }}>
        {props.title}
      </h1>
    </header>);
};
exports.default = Header;
