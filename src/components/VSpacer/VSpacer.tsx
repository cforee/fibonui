import React from 'react';
import { FIBS } from '../../constants/fibonacci';

type NumericSpacerSize = '_1' | '_3' | '_5' | '_8' | '_13' | '_21' | '_34' | '_55';
type NamedSpacerSize = 'default' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
type SpacerSize = NumericSpacerSize | NamedSpacerSize;

export interface VSpacerProps {
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
  height: string;
}> = {
  _1: {
    height: '1px'
  },
  _3: {
    height: `${FIBS.SM}px`
  },
  _5: {
    height: `${FIBS.MD}px`
  },
  _8: {
    height: `${FIBS.LG}px`
  },
  _13: {
    height: `${FIBS.XL}px`
  },
  _21: {
    height: `${FIBS.XXL}px`
  },
  _34: {
    height: `${FIBS.XXXL}px`
  },
  _55: {
    height: `${FIBS.XXXXL}px`
  }
};

const getStyles = (size: SpacerSize = 'default') => {
  const numericSize = (sizeMap as Record<string, NumericSpacerSize>)[size] || size as NumericSpacerSize;
  return {
    ...sizes[numericSize],
    display: 'block',
    width: '100%'
  };
};

export const VSpacer = ({
  size = 'default'
}: VSpacerProps) => {
  return <div style={getStyles(size)} />;
};
