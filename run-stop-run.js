function *range(from, to) {

  let index = from

  while (index <= to ) {

    yield index++

  }

}

for (var r of range(5, 10)) {
    console.log( r )
}

// should print: 5, 6, 7, 8, 9, 10
