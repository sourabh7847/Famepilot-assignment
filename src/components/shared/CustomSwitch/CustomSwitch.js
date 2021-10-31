import React from 'react';
import Switch from 'react-switch';

const CustomSwitch = ({ checked, setChecked }) => {
  return (
    <>
      <Switch
        onColor={'#27AE60'}
        onHandleColor="#fff"
        handleDiameter={23}
        uncheckedIcon={false}
        checkedIcon={false}
        checked={checked}
        onChange={() => setChecked(!checked)}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={25}
        width={45}
        className="react-switch"
        id="material-switch"
      />
    </>
  );
};

export default CustomSwitch;
