---
title: '【Ruby】AES 暗号化・復号'
description: |
  Ruby の標準ライブラリで AES 暗号化処理を実装する際のメモ。
  毎回違う暗号が生成されるので安心。
tags: ['Ruby']
---

# 検証環境

- Ruby 2.7.3

# サンプルコード

## 暗号化

```ruby:aes_encrypt.rb
require 'openssl'
require 'base64'

# AES 暗号化
# @param [String] plain_text 暗号化したい平文。
# @param [String] password 好きなパスワード。
# @param [String] bit 鍵の長さをビット数で指定。128, 192, 256が指定できる。
def aes_encrypt(plain_text, password, bit)
  # salt を生成
  salt = OpenSSL::Random.random_bytes(8)

  # 暗号器を作成
  enc = OpenSSL::Cipher::AES.new(bit, :CBC)
  enc.encrypt

  # パスワードと salt をもとに鍵と iv を生成し、設定
  key_iv = OpenSSL::PKCS5.pbkdf2_hmac(password, salt, 2000, enc.key_len + enc.iv_len, 'sha256')
  enc.key = key_iv[0, enc.key_len]
  enc.iv = key_iv[enc.key_len, enc.iv_len]

  # 文字列を暗号化
  encrypted_text = enc.update(plain_text) + enc.final

  # Base64 エンコード
  encrypted_text = Base64.encode64(encrypted_text).chomp
  salt = Base64.encode64(salt).chomp

  [encrypted_text, salt]
end
```

## 復号

```ruby:aes_decrypt.rb
require 'openssl'
require 'base64'

# AES 復号
# @param [String] encrypted_text 復号したい文字列。
# @param [String] password 暗号化したときに使用したパスワード。
# @param [String] salt 暗号化したときに生成された salt 。
# @param [String] bit 暗号化したときに指定したビット数。
def aes_decrypt(encrypted_text, password, salt, bit)
  # Base64 デコード
  encrypted_text = Base64.decode64(encrypted_text)
  salt = Base64.decode64(salt)

  # 復号器を生成
  dec = OpenSSL::Cipher::AES.new(bit, :CBC)
  dec.decrypt

  # パスワードと salt をもとに鍵と iv を生成し、設定
  key_iv = OpenSSL::PKCS5.pbkdf2_hmac(password, salt, 2000, dec.key_len + dec.iv_len, 'sha256')
  dec.key = key_iv[0, dec.key_len]
  dec.iv = key_iv[dec.key_len, dec.iv_len]

  # 復号
  dec.update(encrypted_text) + dec.final
end
```

# 使用例

```ruby:example.rb
require_relative './aes_encrypt'
require_relative './aes_decrypt'

# 暗号化したい文字列とパスワードを用意
plain_text = 'Michael jackson'
password = '**password**'

# 暗号化
# encrypted_text と salt は実行するたびに違う文字列が生成される
encrypted_text, salt = aes_encrypt(plain_text, password, 128)
puts encrypted_text
# => +VngYmAP/dkFtAG+JQTr5g==
puts salt
# => bAZ5KPvK57Y=

# 複合
decrypted_text = aes_decrypt(encrypted_text, password, salt, 128)
puts decrypted_text
# => Michael jackson
```

# 参考

https://docs.ruby-lang.org/ja/2.7.0/class/OpenSSL=3a=3aCipher.html
https://docs.ruby-lang.org/ja/2.7.0/class/OpenSSL=3a=3aPKCS5.html
