# jalali-wheel-datepicker

> react jalali wheel date picker in ios style

## Preview

> you can check out the preview on this link : https://6677fd997ffbc47279e235b6--dashing-tarsier-9341d2.netlify.app/

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
  - [Preview](#preview)
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

| props            | type                    | Description                       |
| ---------------- | ----------------------- | --------------------------------- |
| header           | String                  | the header title                  |
| ------           | -------------           | --------------------              |
| preview          | String                  | the DatePicker preview            |
| ------           | -------------           | --------------------              |
| previewClassName | string                  | the DatePicker preview className  |
| ------           | -------------           | --------------------              |
| inputClassName   | string                  | the input className               |
| ------           | -------------           | --------------------              |
| buttonText       | string                  | button modal Value                |
| ------           | -------------           | --------------------              |
| inputSuffix      | string                  | the input suffix                  |
| ------           | -------------           | --------------------              |
| inputPrefix      | string                  | the input prefix                  |
| ------           | -------------           | --------------------              |
| selectedDate     | string                  | selected Date                     |
| ------           | -------------           | --------------------              |
| changeDate       | (date : string) => void | selected Date function            |
| ------           | -------------           | --------------------              |
| modalWidth       | string                  | modal width                       |
| ------           | -------------           | --------------------              |
| previewStyles    | React.CSSProperties     | preview styles                    |
| ------           | -------------           | --------------------              |
| initialDay       | number                  | set initial Day for day wheel     |
| ------           | -------------           | --------------------              |
| initialMonth     | number                  | set initial Month for Month wheel |
| ------           | -------------           | --------------------              |
| initialYear      | number                  | set initial Year for Year wheel   |

## Contributing

for contributing please contact me in [telegram] : https://t.me/hashemianm

## Authors

- **seyyed mohammad javad hashemian** - _front end developer_ - [SeyyedMohammadJavadHashemian](https://github.com/mjhashemian)
