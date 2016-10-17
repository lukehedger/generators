function getFoo () {
  return new Promise(function (resolve, reject) {
    resolve('foo')
  })
}

function run (generator) {

  const it = generator()

  const go = (result) => {

    if (result.done) return result.value

    return result.value.then( value => go( it.next(value) ), error => go( it.throw(error) ) )

  }

  go( it.next() )

}

run(function* () {

  try {

    const foo = yield getFoo()

    console.log(foo)

  } catch (e) {

    console.log(e)

  }

})
