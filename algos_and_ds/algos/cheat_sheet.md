## Sliding Window

- Init window (loop1), then slide it (loop2)

```js
// O(K)
for (let i = 0; i < k; i++) {
  // do something
}

// O(n-k)
for (let i = k; i < arr.length; i++) {
  // do something
}
```

- Add/remove elements

```js
sum += arr[i]; // add
sum -= arr[i - k]; // remove
```

## Using `Set`

- Set stores unique values, no duplicates
- It's optimized for fast lookup, insertion, and deletion O(1)

### When to use it?

1. Uniqueness: avoids duplicates
2. Does this value exist?
3. When you care about presence, NOT count
4. Removing duplicates from arrays quickly

```js
[...new Set(arr)];
```

| method            | description            |
| ----------------- | ---------------------- |
| .add(value)       | inserts a value        |
| .has(value)       | checks value existence |
| .delete(value)    |                        |
| .size             |                        |
| .clear            |                        |
| for...of / spread | for (const v of set){} |

## Calculating the difference

- In sorted:
  diff = bigVal - smallVal

## Math.max

- Returns the largest number within a bound

```js
Math.max([1, 3, 5, 10, 8]); // returns 10
```
