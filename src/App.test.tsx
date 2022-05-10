import React from 'react';
import { render } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import App from './App';

let container: Element | null = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement("div");
  // container *必须* 附加到 document，事件才能正常工作。
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container as Element);
  (container as Element).remove();
  container = null;
});


test('renders learn react link', () => {
  render(<App />);
});
