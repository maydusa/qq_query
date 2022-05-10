import { renderHook } from '@testing-library/react-hooks';
import useDebounce from './useDebounce';

const setUp = () => renderHook(({ value, delay }) => 
  useDebounce(value, delay), { initialProps: { value: '', delay: 3000 } }
);

// it('should return undefined on initial render', () => {
//     const { result } = setUp();

//     expect(result.current).toBeUndefined();
// });

it('should always return previous state after each update', () => {
    const { result } = renderHook(({ value, delay }) => 
      useDebounce(value, delay), { initialProps: { value: '', delay: 3000 } }
    );

    console.log(result)
    // rerender({ state: 2 });
    // expect(result.current).toBe(0);

    // rerender({ state: 4 });
    // expect(result.current).toBe(2);

    // rerender({ state: 6 });
    // expect(result.current).toBe(4);
});