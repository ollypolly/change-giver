import { AmountOfDenom, initialAmountOfDenom } from "./constants/denominations"
import { calculateChange } from "./index"

beforeEach(() => {
  // Reset the quantity of each denomination to 0
  Object.values(initialAmountOfDenom).forEach((denom) => {
    denom.quantity = 0
  })
})

describe("calculateChange", () => {
  it("should return correct change for given amount and total", () => {
    const given = 20
    const total = 16.76
    const expectedChange: AmountOfDenom = {
      ...initialAmountOfDenom,
      200: { ...initialAmountOfDenom[200], quantity: 1 },
      100: { ...initialAmountOfDenom[100], quantity: 1 },
      20: { ...initialAmountOfDenom[20], quantity: 1 },
      2: { ...initialAmountOfDenom[2], quantity: 2 },
    }

    expect(calculateChange(given, total)).toEqual(expectedChange)
  })

  it("should return correct change for another given amount and total", () => {
    const given = 10
    const total = 8.21
    const expectedChange: AmountOfDenom = {
      ...initialAmountOfDenom,
      100: { ...initialAmountOfDenom[100], quantity: 1 },
      50: { ...initialAmountOfDenom[50], quantity: 1 },
      20: { ...initialAmountOfDenom[20], quantity: 1 },
      5: { ...initialAmountOfDenom[5], quantity: 1 },
      2: { ...initialAmountOfDenom[2], quantity: 2 },
    }

    expect(calculateChange(given, total)).toEqual(expectedChange)
  })

  it("should return correct change for another given amount and total", () => {
    const given = 20
    const total = 8.04
    const expectedChange: AmountOfDenom = {
      ...initialAmountOfDenom,
      1000: { ...initialAmountOfDenom[1000], quantity: 1 },
      100: { ...initialAmountOfDenom[100], quantity: 1 },
      50: { ...initialAmountOfDenom[50], quantity: 1 },
      20: { ...initialAmountOfDenom[20], quantity: 2 },
      5: { ...initialAmountOfDenom[5], quantity: 1 },
      1: { ...initialAmountOfDenom[1], quantity: 1 },
    }

    expect(calculateChange(given, total)).toEqual(expectedChange)
  })

  it("should return no change if given amount is equal to total", () => {
    const given = 10
    const total = 10
    const expectedChange: AmountOfDenom = {
      ...initialAmountOfDenom,
    }

    expect(calculateChange(given, total)).toEqual(expectedChange)
  })

  it("should return correct change when no denominations can be used", () => {
    const given = 0.03
    const total = 0.01
    const expectedChange: AmountOfDenom = {
      ...initialAmountOfDenom,
      2: { ...initialAmountOfDenom[2], quantity: 1 },
    }

    expect(calculateChange(given, total)).toEqual(expectedChange)
  })
})
