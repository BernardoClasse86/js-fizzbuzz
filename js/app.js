console.log('hello')

// create 3 and 5 multipliers variables
//  if leftover is 0 for both (fizzbuzz) 
//  else if leftover of 3 is 0 (fizz)
//  else if leftover of 5 is 0 (buzz)


for (let i = 1; i < 101; i++) {

    // console.log(i)

    let remainder = i % 3
    // console.log(remainder, 'left over 3')

    let remainder2 = i % 5
    // console.log(remainder2, 'left over 5')

    // leftover is 0 for both (fizzbuzz)
    if ((remainder === 0) && (remainder2 === 0)) {
        console.log('FizzBuzz')
    }

    // else if leftover of 3 is 0 (fizz)
    else if (remainder === 0) {
        console.log('Fizz')
    }

    // else if leftover of 5 is 0 (buzz)
    else if (remainder2 === 0) {
        console.log('Buzz')
    }

    else {
        console.log(i)
    }

}
