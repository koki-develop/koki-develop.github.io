---
title: '【JavaScript】配列を複製する'
tags: ['JavaScript', 'Node.js']
createdAt: 2021-08-23
updatedAt: 2022-02-19
---

# 検証環境

- node v16.13.1

# 悪いパターン

以下のように単純に新しい変数に入れ直して配列の複製を行おうとすると、新しい変数の変更が元の変数にも適用されてしまう。

```js
const ary1 = [1, 2, 3];
const ary2 = ary1;

console.log(ary1); // => [ 1, 2, 3 ]
console.log(ary2); // => [ 1, 2, 3 ]

// ary2 の要素を変更する
ary2[0] = 4;
console.log(ary2); // => [ 4, 2, 3 ]

// ary1 も変更されてしまう
console.log(ary1); // => [ 4, 2, 3 ]
```

# [`Array.prototype.concat()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) を使用する方法

[`Array.prototype.concat()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) は 2 つ以上の配列を結合して新しい配列を返す関数。
引数に何も渡さなければ同じ内容の新しい配列を複製できる。

```js
const ary1 = [1, 2, 3];
const ary2 = ary1.concat();

console.log(ary1); // => [ 1, 2, 3 ]
console.log(ary2); // => [ 1, 2, 3 ]

// ary2 の要素を変更する
ary2[0] = 4;
console.log(ary2); // => [ 4, 2, 3 ]

// ary1 は変更されない
console.log(ary1); // => [ 1, 2, 3 ]
```

# [`Array.prototype.slice()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) を使用する方法

[`Array.prototype.slice()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) は配列の特定の範囲を新しい配列として返す関数。
引数に配列の先頭から末尾までを指定すれば同じ内容の新しい配列を複製できる。

```js
const ary1 = [1, 2, 3];
const ary2 = ary1.slice(0, ary1.length);

console.log(ary1); // => [ 1, 2, 3 ]
console.log(ary2); // => [ 1, 2, 3 ]

// ary2 の要素を変更する
ary2[0] = 4;
console.log(ary2); // => [ 4, 2, 3 ]

// ary1 は変更されない
console.log(ary1); // => [ 1, 2, 3 ]
```

# スプレッド構文を使用する方法

スプレッド構文を使用しても同じ内容の新しい配列を複製できる。

```js
const ary1 = [1, 2, 3];
const ary2 = [...ary1];

console.log(ary1); // => [ 1, 2, 3 ]
console.log(ary2); // => [ 1, 2, 3 ]

// ary2 の要素を変更する
ary2[0] = 4;
console.log(ary2); // => [ 4, 2, 3 ]

// ary1 は変更されない
console.log(ary1); // => [ 1, 2, 3 ]
```

# 参考

https://qiita.com/takahiro_itazuri/items/882d019f1d8215d1cb67
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
