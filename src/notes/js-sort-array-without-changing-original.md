---
title: '【JavaScript】元の配列を変更せずに並び替えした配列を作る'
tags: ['Ruby']
createdAt: 2021-08-23
---

# 検証環境

- node v14.17.5

# 元の配列を変更せずに並び替えした配列を作る

[`Array.prototype.sort()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) は並び替えをした配列を返すが、実行した配列自身も変更する。

```js
const ary = [2, 4, 3, 5, 1];
const sorted = ary.sort((a, b) => a - b);

console.log(sorted); // => [ 1, 2, 3, 4, 5 ]

// 元の配列まで変更される
console.log(ary); // => [ 1, 2, 3, 4, 5 ]
```

元の配列は変更せずに並び替えした配列を作成したい場合は、以下のようにするといい。
元の配列を複製してから [`Array.prototype.sort()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) を実行するイメージ。
( 配列の複製については[こちらの記事](https://zenn.dev/kou_pg_0131/articles/js-clone-array)を参照 )

```js
const ary = [2, 4, 3, 5, 1];
const sorted = ary.concat().sort((a, b) => a - b);
// ↓こっちでもいい
// const sorted = ary.slice(0, ary.length).sort((a, b) => a - b);
// const sorted = [...ary].sort((a, b) => a - b);

console.log(sorted); // => [ 1, 2, 3, 4, 5 ]

// 元の配列は変更されない
console.log(ary); // => [ 2, 4, 3, 5, 1 ]
```

# 参考

https://zenn.dev/kou_pg_0131/articles/js-clone-array
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
