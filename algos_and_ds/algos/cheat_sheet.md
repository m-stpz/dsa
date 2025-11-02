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

## Hash maps

- They trade memory for speed
- Ideal for: fast lookup, counting

| Operation                               | Description                  | Average time |
| --------------------------------------- | ---------------------------- | ------------ |
| Insertion `map[key] = value`            | Add/update a key/value pair  | O(1)         |
| Lookup `map[key]`                       | Retrive a value by key       | O(1)         |
| Deletion map[key]                       | Remove a key/value pair      | O(1)         |
| Iteration `for...in` / `Object.entries` | Traverse all keys or entries | O(n)         |

```js
Object.keys(obj); // → array of keys
Object.values(obj); // → array of values
Object.entries(obj); // → array of [key, value] pairs
```

### Comparing maps

```js
function compareMaps(mapA, mapB) {
  for (const [key, valueA] of Object.entries(mapA)) {
    const valueB = mapB[key];

    if (!valueB || valueA !== valueB) {
      return false;
    }
  }

  return true;
}
```

### Circular arrays

#### Core pattern

```js
arr[(index + n) % n];
```

- Keep index inside bounds [0, n-1]
- Works for positive and negative index
- `+ n` prevents negative results before % n

#### Forward traversal

- Moves right
- If out of bounds right, go back the beginning

```js
for (let j = 1; j <= k; j++) {
  const fwdIndex = (i + j) % n;
  sum += arr[fwdIndex];
}
```

#### Backward traversal

- Move left
- If out of bounds left, go back to the end

```js
for (let j = 1; j <= k; j++) {
  const bkwIndex = (i - j + n) % n;
  sum += arr[bkwIndex];
}
```

#### Bidirectional template

```js
const n = arr.length;
const step = k > 0 ? 1 : -1;
const count = Math.abs(k);

for (let i = 0; i < n; i++) {
  let sum = 0;

  for (let j = 1; j <= count; j++) {
    sum += arr[(i + j * step + n) % n];
  }
}
```

#### Further notes

- why j starts at 1?
  - j = 1 skips the current element
  - j <= k, ensures the window size

## Linked Lists

- Traversing a linked list

```js
let current = head;

while (current) {
  current = current.next;
}
```

```js
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // traverse
  traverse() {
    let current = this.head;

    while (current) {
      current = current.next;
    }
  }

  // append: add to end
  append(val) {
    const newNode = new ListNode(val);

    // what if the linked list is empty?
    if (!this.head) {
      this.head = newNode;
      return; // return it!
    }

    let current = this.head;

    // go until the end
    // while current.next!
    while (current.next) {
      current = current.next;
    }

    // once, at the end, add our next node as element
    current.next = newNode;
  }

  // prepend: add to beginning
  prepend(val) {
    const newNode = new ListNode(val);

    newNode.next = this.head;
    this.head = newNode;
  }

  // find
  find(val) {
    let current = this.head;

    while (current) {
      if (current.val === val) {
        return current;
      }
      // walk it!
      current = current.next;
    }

    return null;
  }

  // delete
  delete(val) {
    if (!this.head) {
      return;
    }

    if (this.head.val === val) {
      this.head = this.head.next;
      reutrn;
    }

    let current = this.head;

    // walk until there are elements and none of the next elements is our val
    while (current.next && current.next.val !== val) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}
```
