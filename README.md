Sigfox CLI
===================================

Sigfox CLI utils.

## Installation

You can use this package on the server side as well as the client side.

### [Node.js](http://nodejs.org/):

~~~
npm install -g sigfox-cli
~~~

## Usage

~~~ bash
sigfox-cli payload 2EFF17FEFC00E90100000000
~~~

This will print the following
~~~ json
payload = 2EFF17FEFC00E90100000000 bytes = 12
[##]: (0x00) - (00000000) - (000)
 --    ----     --------     ----
[00]: (0x2E) - (00101110) - (046)
[01]: (0xFF) - (11111111) - (255)
[02]: (0x17) - (00010111) - (023)
[03]: (0xFE) - (11111110) - (254)
[04]: (0xFC) - (11111100) - (252)
[05]: (0x00) - (00000000) - (000)
[06]: (0xE9) - (11101001) - (233)
[07]: (0x01) - (00000001) - (001)
[08]: (0x00) - (00000000) - (000)
[09]: (0x00) - (00000000) - (000)
[10]: (0x00) - (00000000) - (000)
[11]: (0x00) - (00000000) - (000)
~~~


## Library
--------

## Built with
--------

- node: 8.11.2
- npm: 6.1.0


# Release Notes

### 1.0.0 (Oct 09, 2018)
* `all`: first release

