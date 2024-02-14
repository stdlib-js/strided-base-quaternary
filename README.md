<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Quaternary

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a quaternary callback to strided input array elements and assign results to elements in a strided output array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import quaternary from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-quaternary@v0.2.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-quaternary@v0.2.0-esm/index.mjs';
```

#### quaternary( arrays, shape, strides, fcn )

Applies a quaternary callback to strided input array elements and assigns results to elements in a strided output array.

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add4@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var u = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

quaternary( [ x, y, z, w, u ], [ x.length ], [ 1, 1, 1, 1, 1 ], add );
// u => <Float64Array>[ 4.0, 8.0, 12.0, 16.0, 20.0 ]
```

The function accepts the following arguments:

-   **arrays**: array-like object containing four strided input arrays and one strided output array.
-   **shape**: array-like object containing a single element, the number of indexed elements.
-   **strides**: array-like object containing the stride lengths for the strided input and output arrays.
-   **fcn**: quaternary function to apply.

The `shape` and `strides` parameters determine which elements in the strided input and output arrays are accessed at runtime. For example, to index every other value in the strided input arrays and to index the first `N` elements of the strided output array in reverse order,

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add4@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var u = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

quaternary( [ x, y, z, w, u ], [ 3 ], [ 2, 2, 2, 2, -1 ], add );
// u => <Float64Array>[ 20.0, 12.0, 4.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add4@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var u0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var z1 = new Float64Array( z0.buffer, z0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var u1 = new Float64Array( u0.buffer, u0.BYTES_PER_ELEMENT*3 ); // start at 4th element

quaternary( [ x1, y1, z1, w1, u1 ], [ 3 ], [ -2, -2, -2, -2, 1 ], add );
// u0 => <Float64Array>[ 0.0, 0.0, 0.0, 24.0, 16.0, 8.0 ]
```

#### quaternary.ndarray( arrays, shape, strides, offsets, fcn )

Applies a quaternary callback to strided input array elements and assigns results to elements in a strided output array using alternative indexing semantics.

<!-- eslint-disable max-len -->

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add4@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var u = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

quaternary.ndarray( [ x, y, z, w, u ], [ x.length ], [ 1, 1, 1, 1, 1 ], [ 0, 0, 0, 0, 0 ], add );
// u => <Float64Array>[ 4.0, 8.0, 12.0, 16.0, 20.0 ]
```

The function accepts the following additional arguments:

-   **offsets**: array-like object containing the starting indices (i.e., index offsets) for the strided input and output arrays.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsets` parameter supports indexing semantics based on starting indices. For example, to index every other value in the strided input arrays starting from the second value and to index the last `N` elements in the strided output array,

<!-- eslint-disable max-len -->

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add4@esm/index.mjs';
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';

var x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var u = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

quaternary.ndarray( [ x, y, z, w, u ], [ 3 ], [ 2, 2, 2, 2, -1 ], [ 1, 1, 1, 1, u.length-1 ], add );
// u => <Float64Array>[ 0.0, 0.0, 0.0, 24.0, 16.0, 8.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import filledarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled@esm/index.mjs';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@esm/index.mjs';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add4@esm/index.mjs';
import quaternary from 'https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-quaternary@v0.2.0-esm/index.mjs';

var N = 10;

var x = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( x );

var y = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( y );

var z = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( z );

var w = filledarrayBy( N, 'generic', discreteUniform( -100, 100 ) );
console.log( w );

var u = filledarray( 0.0, N, 'generic' );
console.log( u );

var shape = [ N ];
var strides = [ 1, 1, 1, 1, -1 ];
var offsets = [ 0, 0, 0, 0, N-1 ];

quaternary.ndarray( [ x, y, z, w, u ], shape, strides, offsets, add );
console.log( u );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/binary`][@stdlib/strided/base/binary]</span><span class="delimiter">: </span><span class="description">apply a binary callback to elements in strided input arrays and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/nullary`][@stdlib/strided/base/nullary]</span><span class="delimiter">: </span><span class="description">apply a nullary callback and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/quinary`][@stdlib/strided/base/quinary]</span><span class="delimiter">: </span><span class="description">apply a quinary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/ternary`][@stdlib/strided/base/ternary]</span><span class="delimiter">: </span><span class="description">apply a ternary callback to strided input array elements and assign results to elements in a strided output array.</span>
-   <span class="package-name">[`@stdlib/strided-base/unary`][@stdlib/strided/base/unary]</span><span class="delimiter">: </span><span class="description">apply a unary callback to elements in a strided input array and assign results to elements in a strided output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-quaternary.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-quaternary

[test-image]: https://github.com/stdlib-js/strided-base-quaternary/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/strided-base-quaternary/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-quaternary/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-quaternary?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-quaternary.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-quaternary/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-quaternary/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-quaternary/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-quaternary/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-quaternary/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-quaternary/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-quaternary/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-quaternary/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-quaternary/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/strided/base/binary]: https://github.com/stdlib-js/strided-base-binary/tree/esm

[@stdlib/strided/base/nullary]: https://github.com/stdlib-js/strided-base-nullary/tree/esm

[@stdlib/strided/base/quinary]: https://github.com/stdlib-js/strided-base-quinary/tree/esm

[@stdlib/strided/base/ternary]: https://github.com/stdlib-js/strided-base-ternary/tree/esm

[@stdlib/strided/base/unary]: https://github.com/stdlib-js/strided-base-unary/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
