import React from 'react';
import { connect } from 'react-redux';
import './Menu.scss';
import MenuItem from '../menu-item/MenuItem';
import { createStructuredSelector } from 'reselect';
import { selectMenuSections } from '../../redux/menu/menuSelector';

const Menu = ({ sections }) => {
  console.log(sections);
  return (
    <div className='Menu'>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectMenuSections,
});

export default connect(mapStateToProps)(Menu);
