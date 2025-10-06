## Access & Insertion/Removal

| method    | explanation       | time | space |
| --------- | ----------------- | ---- | ----- |
| arr[i]    |                   | O(1) | O(1)  |
| push()    | insert at end     | O(1) | O(1)  |
| pop()     | remove from end   | O(1) | O(1)  |
| unshift() | insert at start   | O(n) | O(1)  |
| shift()   | remove from start | O(n) | O(1)  |

## Iteration & Search

| method              | explanation                                           | time | space |
| ------------------- | ----------------------------------------------------- | ---- | ----- |
| forEach             | perform operation each item list. no return           | O(n) | O(1)  |
| map                 | operation each item, returns new array                | O(n) | O(n)  |
| filter              | returns all elements except filtered ones             | O(n) | O(n)  |
| reduce              | reduces array to single value                         | O(n) | O(1)  |
| find                | returns the first element which corresponds to search | O(n) | O(1)  |
| findIndex           | returns index of first match                          | O(n) | O(1)  |
| includes            | checks if value exists                                | O(n) | O(1)  |
| indexOf/lastIndexOf | return index of value (first/last)                    | O(n) | O(1)  |

## Sorting & Reordering

| method  | explanation                           | time       | space |
| ------- | ------------------------------------- | ---------- | ----- |
| sort    | sorts array in place (no new array)   | O(n log n) | O(n)  |
| reverse | reverse order in place (no new array) | O(n)       | O(1)  |

## Copying and slicing

| method | explanation                                    | time   | space  |
| ------ | ---------------------------------------------- | ------ | ------ |
| slice  | non-destructive, returns a new array (copy)    | O(n)   | O(n)   |
| splice | destructive, affects original array (modifies) | O(n)   | O(n)   |
| concat | joins arrays into one                          | O(n+m) | O(n+m) |
| flat   | flattens nested arrays                         | O(n)   | O(n)   |

> slice returns a piece of the array but it doesn’t affect the original array. splice changes the original array by removing, replacing, or adding values and returns the affected values.

## Joining & String conversion

| method | explanation                  | time | space |
| ------ | ---------------------------- | ---- | ----- |
| join   | joins elements into a string | O(n) | O(n)  |
