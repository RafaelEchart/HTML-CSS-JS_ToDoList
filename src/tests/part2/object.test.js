import { toDoMock } from "./mockObject";


describe('toDoMock', () => {
  test('return the length of the arrays of objects', () => {
    
    expect(toDoMock.length).toBe(5)
  })

  test('return the content of the toDoMock object', () => {
    expect(toDoMock[0].description).toContain('Walk the dog')
    
  })
  test('return the index of of the array', () => {
    expect(toDoMock[0].index).toBe(1)
    
  })
  test('return the of a task in the toDoMock array', () => {
    expect(toDoMock[2].completed).toBe(true)
    
  })
})
