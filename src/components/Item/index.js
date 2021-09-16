const Item = (props) => {
  const { children } = props;

  return (
    <a
      href="/"
      className="list-group-item list-group-item-action list-group-item-secondary "
    >
      {children}
    </a>
  );
};

export default Item;
