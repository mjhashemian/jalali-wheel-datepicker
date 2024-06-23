# jalali-wheel-datepicker

> react jalali wheel date picker in ios style

> ![video](https://drive.google.com/file/d/1n3-mK4IsdwYtgUjc-BZl-6Bw3sDYQx38/view?usp=sharing)

## Prerequisites

This project requires NodeJS (version 12 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```

## Table of contents

- [Project Name](#project-name)
  - [Prerequisites](#prerequisites)
  - [props](#props)
  - [Installation](#installation)
  - [Contributing](#contributing)
  - [Authors](#authors)

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

To install and set up the library, run:

```sh
$ npm i jalali-wheel-datepicker
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev jalali-wheel-datepicker
```

## Usage

```tsx
import { DatePciker } from "jalali-wheel-datepicker";
const App: React.Fc = () => {
  return (
    <div>
      <DatePciker />
    </div>
  );
};

export default App;
```

## Props

| props            | type                    | Description                      |
| ---------------- | ----------------------- | -------------------------------- |
| header           | String                  | the header title                 |
| ------           | -------------           | --------------------             |
| preview          | String                  | the DatePicker preview           |
| ------           | -------------           | --------------------             |
| previewClassName | string                  | the DatePicker preview className |
| ------           | -------------           | --------------------             |
| inputClassName   | string                  | the input className              |
| ------           | -------------           | --------------------             |
| buttonText       | string                  | button modal Value               |
| ------           | -------------           | --------------------             |
| inputSuffix      | string                  | the input suffix                 |
| ------           | -------------           | --------------------             |
| inputPrefix      | string                  | the input prefix                 |
| ------           | -------------           | --------------------             |
| selectedDate     | string                  | selected Date                    |
| ------           | -------------           | --------------------             |
| changeDate       | (date : string) => void | selected Date function           |
| ------           | -------------           | --------------------             |
| modalWidth       | string                  | modal width                      |
| ------           | -------------           | --------------------             |
| previewStyles    | React.CSSProperties     | preview styles                   |

## Contributing

for contributing please contact me in [telegram] : https://t.me/hashemianm

## Authors

- **seyyed mohammad javad hashemian** - _front end developer_ - [SeyyedMohammadJavadHashemian](https://github.com/mjhashemian)
