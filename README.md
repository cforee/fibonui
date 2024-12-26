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

## Components

### Button

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

### VSpacer

A vertical spacer component with different sizes.

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
