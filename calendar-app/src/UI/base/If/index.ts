const If = (props: IfProps) => (props.true ? props.render || props.children : null);

export default If;
