import PropTypes from 'prop-types';

function Button({
  variant,
  children,
  className: additionalClassNames,
  ...props
}) {
  const baseTransition = 'transition-[transform,background-color,color,border-color] duration-200 ease-out active:scale-[0.96] cursor-pointer';
  let classes = '';

  switch (variant) {
    case 'primary':
      classes = `bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 my-2 ${baseTransition}`;
      break;
    case 'secondary':
      classes = `bg-white hover:bg-gray-100 text-orange-500 py-3 px-4 my-2 ${baseTransition}`;
      break;
    case 'outline':
      classes = `bg-transparent hover:bg-orange-500 text-orange-500 hover:text-white border-2 border-orange-500 py-3 px-4 my-2 ${baseTransition}`;
      break;
    case 'danger':
      classes = `bg-red-500 hover:bg-red-600 text-white py-3 px-4 my-2 ${baseTransition}`;
      break;
    default:
      classes = `bg-orange-500 hover:bg-orange-600 py-3 px-4 my-2 ${baseTransition}`;
      break;
  }

  if (additionalClassNames) {
    classes += ` ${additionalClassNames}`;
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
