import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

export const checkboxEggAtom = atom(false);

const CheckboxEgg = () => {
  const [isChecked1, setIsChecked1] = useAtom(checkboxEggAtom);
  const [isChecked2, setIsChecked2] = useAtom(checkboxEggAtom);

  const handleCheckboxChange1 = () => {
    setIsChecked1(!isChecked1);
  };

  const handleCheckboxChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  useEffect(() => {
    const savedCheckboxState1 = localStorage.getItem('checkboxEggState1');
    if (savedCheckboxState1) {
      setIsChecked1(savedCheckboxState1 === 'true');
    }
  }, []);

  useEffect(() => {
    const savedCheckboxState2 = localStorage.getItem('checkboxEggState2');
    if (savedCheckboxState2) {
      setIsChecked2(savedCheckboxState2 === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkboxEggState1', isChecked1);
  }, [isChecked1]);

  useEffect(() => {
    localStorage.setItem('checkboxEggState2', isChecked2);
  }, [isChecked2]);

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="checkbox checkbox-coral checked:bg-coral"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
          />
          <p className="pl-4">ไข่ดาว</p>
        </div>
      </label>
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="checkbox"
            className="checkbox checkbox-coral checked:bg-coral"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
          />
          <p className="pl-4">ไข่เจียว</p>
        </div>
      </label>
    </div>
  );
};

export default CheckboxEgg;