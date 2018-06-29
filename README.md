# async-nocatch

Get rid of `try/catch` wrappers for your `async/await` functions.

## Why?

- Unnecessary nesting
- Failure is not always an **error** but `try/catch` means handling **error**
- You should always `catch`

## Installation

```bash
npm i async-nocatch # or yarn add async-nocatch
```

```js
import nocatch from "async-nocatch"

// For example
const nocatchFetch = nocatch(fetch)
```

## Before

```js
try {
  const result = await fetch('https://api.github.com/users')
  console.log('Done', result)
} catch (error) {
  console.log('Fail', error)
}
```

## After

```js
const { success, result } = await nocatchFetch('https://api.github.com/users')

if (success) {
  console.log('Done', result)
} else {
  console.log('Fail', result)
}
```
