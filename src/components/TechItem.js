import React from 'react';
import PropTypes from 'prop-types';

/*ou poderia ser props.tech*/
function TechItem({ tech, onDelete }) {
  return (
    <li>
      {tech}
      <button onClick={onDelete} type="button">
        Remover
      </button>
    </li>
  );
}

/*Defaultprops serve para passar informaçoes caso o valor viesse nulo */
TechItem.defaultProps = {
  tech: 'Oculto',
};

TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default TechItem;
