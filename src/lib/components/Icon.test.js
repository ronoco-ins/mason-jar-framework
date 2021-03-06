import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from "../index.js";

describe('Icon', () => {
  it('matches snapshot', () => {
    const component = shallow(<Icon></Icon>);
    expect(component).toMatchSnapshot();
  });

  it('has expected props', () => {
    const iconName = 'anything-at-all'; 
    const component = shallow(
      <Icon name={ iconName } className={ cn } what="ever" />
    );
    const classNameArray = component.prop('className').split(' ');
    expect(component.type()).toBe('span')
    expect(component.prop('what')).toBe('ever');
    expect(classNameArray).toContain('fe');
    expect(classNameArray).toContain(`fe-${iconName}`);
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(3);
  });
  it('can pass custom element type', ()=>{
    const elType='i';
    const component = shallow(<Icon as={ elType }/>);
    expect(component.type()).toBe(elType)
  })
});
