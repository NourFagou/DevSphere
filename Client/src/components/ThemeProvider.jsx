/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
export default function ThemeProvider({ children }) {
  const { theme } = useSelector((state) => state.theme);
  return (
    <div className={theme}>
      <div className='bg-white text-gray-700 dark:text-gray-200 dark:bg-black'>{children}</div>
    </div>
  );
}
