import React from 'react';
import { FIBS } from '../../constants/fibonacci';

type NumericSpacerSize = '_1' | '_3' | '_5' | '_8' | '_13' | '_21' | '_34' | '_55';
type NamedSpacerSize = 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
type SpacerSize = NumericSpacerSize | NamedSpacerSize;

export interface HSpacerProps {
  size?: SpacerSize;
}

const sizeMap: Record<NamedSpacerSize, NumericSpacerSize> = {
  default: '_1',
  xsmall: '_3',
  small: '_5',
  medium: '_8',
  large: '_13',
  xlarge: '_21',
  xxlarge: '_34',
  xxxlarge: '_55'
};

const sizes: Record<NumericSpacerSize, {
  width: string;
}> = {
  _1: {
    width: '1px'
  },
  _3: {
    width: `${FIBS.SM}px`
  },
  _5: {
    width: `${FIBS.MD}px`
  },
  _8: {
    width: `${FIBS.LG}px`
  },
  _13: {
    width: `${FIBS.XL}px`
  },
  _21: {
    width: `${FIBS.XXL}px`
  },
  _34: {
    width: `${FIBS.XXXL}px`
  },
  _55: {
    width: `${FIBS.XXXXL}px`
  }
};

const getStyles = (size: SpacerSize = 'default') => {
  const numericSize = (sizeMap as Record<string, NumericSpacerSize>)[size] || size as NumericSpacerSize;
  return {
    ...sizes[numericSize],
    padding: 0,
    margin: 0,
    display: 'inline-block',
  };
};

export const HSpacer = ({
  size = 'default'
}: HSpacerProps) => {
  return <div style={getStyles(size)} />;
};
