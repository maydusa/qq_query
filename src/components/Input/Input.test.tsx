import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import Input from './Input';
import ReactTestUtils, { act } from 'react-dom/test-utils';

let container: Element | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  jest.useFakeTimers();
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
  container = null;
  jest.useRealTimers();
});


test('renders learn react link', () => {
  let instance;
  ReactTestUtils.act(() => {
    instance = render(<Input />);
  });
  
  const input = document.querySelector('[data-testid=input]');
  const tips = document.querySelector('[data-testid=tips]');

  const fireChange = (text: string) => {
    fireEvent.change(input as Element, {
      target: {
        value: text
      }
    })
  }

  act(() => {
    (input as any).value = '12345';
    ReactTestUtils.Simulate.change(input as Element)
    // input?.dispatchEvent(new InputEvent('change', { data: 'xiaoming', inputType: 'inserting' }));
  });

  expect(tips).toBeInTheDocument();
  expect(input).toHaveValue('12345');
});
