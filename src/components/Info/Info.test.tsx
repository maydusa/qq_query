import React from 'react';
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import Info from './Info';
import ReactTestUtils, { act } from 'react-dom/test-utils';
import UserIcon from '../../images/user.png';

let container: Element | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
  container = null;
});


test('render Info', () => {
  act(() => {
    render(<Info containerStyle={{}} name={'xiaoming'} qlogo={''} qq={12345} />);
  });

  const nickname = document.querySelector('[data-testid=nickname]');
  const qq = document.querySelector('[data-testid=qq]');

  expect(nickname).toHaveTextContent('xiaoming');
  expect(qq).toHaveTextContent('12345');
});
