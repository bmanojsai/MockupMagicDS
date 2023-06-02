import React from 'react';
import {Button} from 'react-native';

const MagicButton: React.FC<{title: string}> = ({title}) => {
  const buttonTitle:string = title ? title : 'buttontitle';
  return <Button title={buttonTitle} />;
};

export default MagicButton;
