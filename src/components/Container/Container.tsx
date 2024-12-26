import React from 'react';
import { FIBS } from '../../constants/fibonacci';
import { COLORS } from '../../themes/default';

type SpacingSize = 'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
type AlignContent = 'left' | 'center' | 'right';
type PortionWidth = '1_1' | '1_2' | '1_3' | '1_4' | '1_5' | '1_6';

export interface ContainerProps {
  children: React.ReactNode;
  // Width prop
  portionWidth?: PortionWidth;
  // Alignment prop
  contentAlignment?: AlignContent;
  // Border props
  hasBorder?: boolean;
  borderWidth?: number;
  borderColor?: string;
  // Margin props
  margin?: SpacingSize;
  lrmargin?: SpacingSize;
  tbmargin?: SpacingSize;
  lmargin?: SpacingSize;
  rmargin?: SpacingSize;
  tmargin?: SpacingSize;
  bmargin?: SpacingSize;
  // Padding props
  padding?: SpacingSize;
  lrpadding?: SpacingSize;
  tbpadding?: SpacingSize;
  lpadding?: SpacingSize;
  rpadding?: SpacingSize;
  tpadding?: SpacingSize;
  bpadding?: SpacingSize;
}

const spacingMap: Record<SpacingSize, number> = {
  none: 0,
  xsmall: FIBS.SM,
  small: FIBS.MD,
  medium: FIBS.LG,
  large: FIBS.XL,
  xlarge: FIBS.XXL,
};

const widthMap: Record<PortionWidth, string> = {
  '1_1': '100%',
  '1_2': '50%',
  '1_3': '33.333%',
  '1_4': '25%',
  '1_5': '20%',
  '1_6': '16.667%'
};

const getSpacingValue = (size: SpacingSize = 'none') =>
  `${spacingMap[size]}px`;

const getStyles = ({
  portionWidth,
  contentAlignment = 'left',
  hasBorder,
  borderWidth = 1,
  borderColor = COLORS.neutral[300],
  margin,
  lrmargin,
  tbmargin,
  lmargin,
  rmargin,
  tmargin,
  bmargin,
  padding,
  lrpadding,
  tbpadding,
  lpadding,
  rpadding,
  tpadding,
  bpadding,
}: ContainerProps) => ({
  // Width
  width: portionWidth ? `calc(${widthMap[portionWidth]} - ${borderWidth * 2}px)` : '100%',
  // Alignment
  textAlign: contentAlignment,
  // Display
  display: 'inline-block',
  // Border
  border: hasBorder ? `${borderWidth}px solid ${borderColor}` : '1px solid transparent',
  // Margins
  marginLeft: lmargin ? getSpacingValue(lmargin) :
              lrmargin ? getSpacingValue(lrmargin) :
              margin ? getSpacingValue(margin) : undefined,
  marginRight: rmargin ? getSpacingValue(rmargin) :
               lrmargin ? getSpacingValue(lrmargin) :
               margin ? getSpacingValue(margin) : undefined,
  marginTop: tmargin ? getSpacingValue(tmargin) :
            tbmargin ? getSpacingValue(tbmargin) :
            margin ? getSpacingValue(margin) : undefined,
  marginBottom: bmargin ? getSpacingValue(bmargin) :
               tbmargin ? getSpacingValue(tbmargin) :
               margin ? getSpacingValue(margin) : undefined,
  // Paddings
  paddingLeft: lpadding ? getSpacingValue(lpadding) :
               lrpadding ? getSpacingValue(lrpadding) :
               padding ? getSpacingValue(padding) : undefined,
  paddingRight: rpadding ? getSpacingValue(rpadding) :
                lrpadding ? getSpacingValue(lrpadding) :
                padding ? getSpacingValue(padding) : undefined,
  paddingTop: tpadding ? getSpacingValue(tpadding) :
              tbpadding ? getSpacingValue(tbpadding) :
              padding ? getSpacingValue(padding) : undefined,
  paddingBottom: bpadding ? getSpacingValue(bpadding) :
                 tbpadding ? getSpacingValue(tbpadding) :
                 padding ? getSpacingValue(padding) : undefined,
});

export const Container = (props: ContainerProps) => {
  const { children, ...spacingProps } = props;
  return (
    <div style={getStyles(spacingProps)}>
      {children}
    </div>
  );
};
