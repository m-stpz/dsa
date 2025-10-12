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
