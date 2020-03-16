import React from 'react';
import renderer from 'react-test-renderer';
import { ShowNav } from './App';

describe('ShowNav', () => {
  test('snapshot renders', () => {
    const shows = [{'one': 'one', 'two': 'two'}];
    const currentId = 'two';
    const component = renderer.create(<ShowNav shows={shows} currentId={currentId} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
