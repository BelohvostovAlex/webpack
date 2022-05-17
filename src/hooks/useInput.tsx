import React, { useState } from 'react';

export const useInput = (
  initialValue: string = ''
): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<string>(initialValue);

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  return [value, handleValue];
};
