import {
  AmountOfDenom,
  initialAmountOfDenom,
  denominations,
} from "./constants/denominations"

/**
 * Change Giver
 * @param given - amount given by customer in pounds
 * @param total - total due from transaction in pounds
 * @returns changeDue - object of denomination to amount of denomination
 */
export const calculateChange = (
  given: number,
  total: number
): AmountOfDenom => {
  let remaining = convertToPence(given) - convertToPence(total)
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

/**
 * Finds the closest lower denomination to the given value
 * @param goal given goal to find closest value to
 * @param values possible values, in this case denominations
 * @returns The closest value or null
 */
const findClosest = (goal: number, values: number[]) => {
  const filteredValues = values.filter((value) => value <= goal)
  if (filteredValues.length === 0) {
    return null
  }
  return filteredValues.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  )
}

/**
 * Logs the change to the console
 * @param changeDue Change object
 */
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

/**
 * Utility functions to convert pounds to pence and vice versa, as financial operations should not use floating point arithmatic
 */
const convertToPence = (value: number) => parseInt((value * 100).toFixed(0))
const convertToPounds = (value: number) => parseInt((value / 100).toFixed(0))

outputChange(calculateChange(20, 16.76))
outputChange(calculateChange(10, 8.21))
