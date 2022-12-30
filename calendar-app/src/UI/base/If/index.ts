const If = (props: IfProps) => (props.when ? props.render : null);

export default If;
