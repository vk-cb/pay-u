import React from 'react';
import { useTheme } from '../utils/Theme';

const RandomComponent = () => {
  const { theme } = useTheme();

  return (
    <div className={`p-4 ${theme.primary} ${theme.text}`}>
      <h1 className="text-xl font-bold">Themed Component</h1>
      <p>This component changes its styles based on the selected theme.</p>
      <button className={`mt-4 p-2 ${theme.accent}`}>Themed Button</button>
    </div>
  );
}

export default RandomComponent;
