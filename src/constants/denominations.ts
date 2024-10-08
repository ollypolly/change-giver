export type Denomination =
  | 2000
  | 1000
  | 500
  | 200
  | 100
  | 50
  | 20
  | 10
  | 5
  | 2
  | 1

export const denominations: Denomination[] = [
  2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1,
]

enum MoneyType {
  note = "Note",
  coin = "Coin",
}

export type AmountOfDenom = Record<
  Denomination,
  {
    quantity: number
    displayName: string
    value: number
    type: MoneyType
  }
>

export const initialAmountOfDenom: AmountOfDenom = {
  2000: {
    quantity: 0,
    displayName: "£20",
    value: 2000,
    type: MoneyType.note,
  },
  1000: {
    quantity: 0,
    displayName: "£10",
    value: 1000,
    type: MoneyType.note,
  },
  500: {
    quantity: 0,
    displayName: "£5",
    value: 500,
    type: MoneyType.note,
  },
  200: {
    quantity: 0,
    displayName: "£2",
    value: 200,
    type: MoneyType.coin,
  },
  100: {
    quantity: 0,
    displayName: "£1",
    value: 100,
    type: MoneyType.coin,
  },
  50: {
    quantity: 0,
    displayName: "50p",
    value: 50,
    type: MoneyType.coin,
  },
  20: {
    quantity: 0,
    displayName: "20p",
    value: 20,
    type: MoneyType.coin,
  },
  10: {
    quantity: 0,
    displayName: "10p",
    value: 10,
    type: MoneyType.coin,
  },
  5: {
    quantity: 0,
    displayName: "5p",
    value: 5,
    type: MoneyType.coin,
  },
  2: {
    quantity: 0,
    displayName: "2p",
    value: 2,
    type: MoneyType.coin,
  },
  1: {
    quantity: 0,
    displayName: "1p",
    value: 1,
    type: MoneyType.coin,
  },
}
