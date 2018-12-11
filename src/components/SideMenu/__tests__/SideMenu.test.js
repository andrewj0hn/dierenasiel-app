import React from 'react';
import renderer from 'react-test-renderer';
import SideMenu from '../SideMenu';

test('Menu renders correctly', () => {
  const tree = renderer.create(<SideMenu />).toJSON();
  expect(tree).toMatchSnapshot();
});
