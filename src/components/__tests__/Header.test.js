import React from 'react';
import {shallow} from 'enzyme'
import Header from '../Header';

describe('Header', () => {
  let mountedHeader;
  beforeEach(()=> {
    mountedHeader = shallow(<Header />)
  })
  it('renders without crashing', () => {
    shallow(<Header />)
  });
  it('renders the logo', () => {
    const logoImage = mountedHeader.find('img[src="00d67319e3cfd9860b19fe4cf1ed5c1e.jpg"]')
    expect(logoImage.length).toBe(1)
  })
})