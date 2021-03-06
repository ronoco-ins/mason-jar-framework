import React from 'react';
import { shallow } from 'enzyme';
import { Table } from "../index.js";

describe('Table', () => {
  it('matches snapshot', () => {
    const component = shallow(<Table></Table>);
    expect(component).toMatchSnapshot();
  });
  it('has expected props', () => {
    const children = <div>child</div>;
    const component = shallow(
      <Table
        className={ cn }
        what="ever" >
        { children }
      </Table>
    );
    const classNameArray = component.prop('className').split(' ');
    expect(classNameArray).toContain('table');
    expect(classNameArray).toContain(cn);
    expect(classNameArray).toHaveLength(2);
    expect(component.prop('what')).toBe('ever');
    expect(component.contains(children)).toEqual(true);
  });
});
