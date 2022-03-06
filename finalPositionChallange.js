const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

function finalPosition(moves) {

  const startPos = [0, 0]
  const newPosition = []

  let xcord = startPos[0]
  let ycord = startPos[1]

  for (const move of moves) {

    if (move === 'north') {
      ycord = ycord + 1

    } else if (move === 'west') {
      xcord = xcord - 1

    } else if (move === 'east') {
      xcord = xcord + 1

    } else if (move === 'south') {
      ycord = ycord - 1

    }
  }
  newPosition.push(xcord, ycord)
  return newPosition
}

finalPosition(moves);
console.log(finalPosition(moves))