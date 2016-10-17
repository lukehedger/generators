function *factorial (n) {

  // eg. 5! = 5 x 4 x 3 x 2 x 1

  let index = 1

  while (index <= n) {

    let array = []

    for (var i = index - 1; i > 0; i--) {
      array.push(i)
    }

    yield array.reduce( (p, n, i) => p * n, index )

    index++

  }

}

for (var n of factorial(5)) {
  console.log(n)
}
// 1, 2, 6, 24, 120
