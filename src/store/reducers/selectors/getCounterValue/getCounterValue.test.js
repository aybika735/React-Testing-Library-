import { getCounterValue } from "./getCounterValue"

describe('getCounterValue', ()=>{
    test('work with empty state', ()=>{
expect(getCounterValue({})).toBe(0)
    })
    test('work with filled state', ()=>{
        expect(getCounterValue({
            counter: {
                value: 0
            }
        })).toBe(100)
            })
})