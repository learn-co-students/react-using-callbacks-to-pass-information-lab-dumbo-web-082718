import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
// import sinon from 'sinon';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Matrix from '../src/Matrix'


describe('<Matrix />', () => {

  it("True", () => {
    // did you make sure to pass a function as a prop to Cell instead of the selected value itself?
    expect(true).to.equal(true)
  })

})
