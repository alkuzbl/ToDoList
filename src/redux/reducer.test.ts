
import {InitialStateToDoListType, toDoListReducer} from "./toDoList-reducer";

let state: InitialStateToDoListType = [
    {id: '111', title: 'What to buy', filter: 'All'}
]

test('After deleting the toDoList, the toDoListData and tasksData should be empty', () => {

    let testState = toDoListReducer(state, {type: 'REMOVE_TO_DO_LIST', toDoListId: '111'})
    expect(state.length).toBe(1)
    expect(testState.length).toBe(0)

})
test('After adding the toDoList, the toDoListData should be equal 2 and the taskData[222] = []', () => {

    let testState = toDoListReducer(state, {type: 'ADD_TO_DO_LIST', newToDoListId: '222', newToDoListTitle: 'Test'})
    expect(state.length).toBe(1)

    expect(testState.length).toBe(2)

    expect(testState[1].id).toBe('222')
    expect(testState[1].title).toBe('Test')

})
test('After adding the toDoList, the toDoList title should be "Test" and the ID = "222"', () => {
    let testState = toDoListReducer(state, {type: 'ADD_TO_DO_LIST', newToDoListId: '222', newToDoListTitle: 'Test'})
    expect(testState[1].id).toBe('222')
    expect(testState[1].title).toBe('Test')

})
