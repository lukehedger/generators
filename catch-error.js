function *upper (items) {

  for (var item of items) {

    let value

    try {

      value = item.toUpperCase()

    } catch (e) {

      value = null

    }

    yield value

  }

}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}
// want to log: A, B, null, C
