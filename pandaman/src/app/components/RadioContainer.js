import React, { useEffect } from 'react';
import { atom, useAtom } from 'jotai';

const radioContainerAtom = atom('');

const RadioContainer = () => {
  const [selectedRadio, setSelectedRadio] = useAtom(radioContainerAtom);

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  useEffect(() => {
    const savedRadioState = localStorage.getItem('radioContainerState');
    if (savedRadioState) {
      setSelectedRadio(savedRadioState);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('radioContainerState', selectedRadio);
  }, [selectedRadio]);

  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="plate"
            name="radio-11"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'plate'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ใส่จาน</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">0</p>
        </span>
      </label>

      <div className="divider m-0"></div>

      <label className="label cursor-pointer">
        <div className="flex flex-row">
          <input
            type="radio"
            value="box"
            name="radio-12"
            className="radio checked:bg-coral"
            checked={selectedRadio === 'box'}
            onChange={handleRadioChange}
          />
          <p className="pl-4">ใส่กล่อง</p>
        </div>
        <span className="label-text flex flex-row items-end">
          <p className="text-gray-500">฿</p>
          <p className="font-bold pl-1">5</p>
        </span>
      </label>

    </div>
  );
};

export default RadioContainer;