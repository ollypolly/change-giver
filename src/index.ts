import {
  AmountOfDenom,
  initialAmountOfDenom,
  Denomination,
} from "./constants/initialAmountOfDenom.js"

const denominations: Denomination[] = [
  2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1,
]

/**
 * Change Giver
 * @param given - amount given by customer in pence
 * @param total - total due from transaction in pence
 * @returns changeDue - object of denomination to amount of denomination
 */
const calculateChange = (given: number, total: number): AmountOfDenom => {
  let remaining = given - total
  let changeDue: AmountOfDenom = initialAmountOfDenom

  while (remaining > 0) {
    const closestChange = findClosest(remaining, denominations)

    if (!closestChange) {
      return changeDue
    }

    // Deduct
    remaining -= closestChange
    // Increment denomination object
    changeDue[closestChange].quantity++
  }

  return changeDue
}

const findClosest = (goal: number, values: number[]) => {
  const filteredValues = values.filter((value) => value <= goal)
  if (filteredValues.length === 0) {
    return null
  }
  return filteredValues.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  )
}

const outputChange = (changeDue: AmountOfDenom) => {
  const filteredChange = Object.values(changeDue)
    .filter(({ quantity }) => quantity > 0)
    .sort((a, b) => b.value - a.value)

  console.log("Please give the following change:")
  for (const { quantity, displayName, type } of filteredChange) {
    const isPlural = quantity > 1

    console.log(`${quantity} ${displayName} ${type}${isPlural ? "s" : ""}`)
  }
}

outputChange(calculateChange(2000, 1676))
