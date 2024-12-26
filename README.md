# FibonUI

A React UI component framework based around the Fibonacci sequence. The library provides components with sizing and spacing following the Fibonacci number pattern.

## Installation

```bash
npm install fibonui

# or for yarn
yarn add fibonui
```

## Usage

```tsx
import { Button, VSpacer } from 'fibonui';
```

## Requirements

fibonui has the following peer dependency:
- React ≥ 18.0.0

&nbsp;
## UI Components
### Container
---
A container component which supports width portioning (allowing "grid" layout), content alignment, borders, margin, padding, etc.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| portionWidth | '1_1' \| '1_2' \| '1_3' \| '1_4' \| '1_5' \| '1_6' | '1_1' | Width as a fraction of parent |
| contentAlignment | 'left' \| 'center' \| 'right' | 'left' | Horizontal content alignment |
| hasBorder | boolean | false | Whether to show border |
| borderWidth | number | 1 | Border width in pixels |
| borderColor | string | '#000' | Border color |
| margin | SpacingSize | 'none' | Margin on all sides |
| lrmargin | SpacingSize | - | Left and right margin |
| tbmargin | SpacingSize | - | Top and bottom margin |
| lmargin | SpacingSize | - | Left margin |
| rmargin | SpacingSize | - | Right margin |
| tmargin | SpacingSize | - | Top margin |
| bmargin | SpacingSize | - | Bottom margin |
| padding | SpacingSize | 'none' | Padding on all sides |
| lrpadding | SpacingSize | - | Left and right padding |
| tbpadding | SpacingSize | - | Top and bottom padding |
| lpadding | SpacingSize | - | Left padding |
| rpadding | SpacingSize | - | Right padding |
| tpadding | SpacingSize | - | Top padding |
| bpadding | SpacingSize | - | Bottom padding |

Where `SpacingSize` is one of: `'none' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'`

#### Example

```tsx
<>
  <Container hasBorder borderWidth={8} borderColor="#f3f3f3" contentAlignment="center" portionWidth="1_3">
    <h1>column one</h1>
  </Container>
  <Container hasBorder borderWidth={8} borderColor="#f3f3f3" contentAlignment="center" portionWidth="1_3">
    <h1>column two</h1>
  </Container>
  <Container hasBorder borderWidth={8} borderColor="#f3f3f3" contentAlignment="center" portionWidth="1_3">
    <h1>column three</h1>
  </Container>
</>

<>
  <Container margin="medium" padding="small" lrpadding="large">
    <h1>Container with spacing</h1>
    <p>This container has medium margin and small padding</p>
  </Container>
</>
```

&nbsp;
### Button
---

A customizable button component with different sizes and variants.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' | 'primary' | The button's visual style |
| size | 'xsmall' \| 'small' \| 'medium' \| 'large' | 'medium' | The button's size |

#### Example

```tsx
<Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
  Primary Button Medium
</Button>
```
&nbsp;
### HSpacer
---
A horizontal spacer.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'default' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'xxlarge' \| 'xxxlarge' \| '_1' \| '_3' \| '_5' \| '_8' \| '_13' \| '_21' \| '_34' \| '_55' | 'default' | The spacer's size |

#### Example

```tsx
<HSpacer size="medium" />
<HSpacer size="_34" />
<HSpacer /> // defaults to _1 or 1px width
```

&nbsp;
### VSpacer
---
A vertical spacer.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | 'default' \| 'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge' \| 'xxlarge' \| 'xxxlarge' \|
| "size" aliases | '_1' \| '_3' \| '_5' \| '_8' \| '_13' \| '_21' \| '_34' \| '_55' | 'default' | The spacer's size |

#### Example

```tsx
<VSpacer size="medium" />
<VSpacer size="_34" />
<VSpacer /> // defaults to _1 or 1px height
```
