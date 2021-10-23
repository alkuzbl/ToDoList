import {v1} from "uuid";
import {reducer, RootStateType} from "../App";
let state: RootStateType = {
    toDoListsData: [
        {id: '111', title: 'What to buy', filter: 'All'},],
    tasksData: {
        ['111']: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Beer", isDone: true},
            {id: v1(), title: "Bread", isDone: false},
            {id: v1(), title: "Meat", isDone: false},
            {id: v1(), title: "Potato", isDone: false},
        ]
    },
    filterButtonsData: [
        {id: v1(), title: 'All'},
        {id: v1(), title: 'Active'},
        {id: v1(), title: 'Completed'}
    ]
}
test('After deleting the toDoList, the toDoListData and tasksData should be empty', ()=>{

    let testState = reducer(state, { type: 'REMOVE_TO_DO_LIST', toDoListId: '111' })
    expect(state.toDoListsData.length).toBe(1)
    expect(state.tasksData['111'].length).toBe(5)
    expect(testState.toDoListsData.length).toBe(0)
    expect(testState.tasksData['111'].length).toBe(0)
})
test('After adding the toDoList, the toDoListData should be equal 2 and the taskData[222] = Array', ()=>{

    let testState = reducer(state, { type: 'ADD_TO_DO_LIST', newToDoListId: '222', newToDoListTitle: 'Test' })
    expect(state.toDoListsData.length).toBe(1)
    expect(state.tasksData['111'].length).toBe(5)
    expect(testState.toDoListsData.length).toBe(2)
    expect(testState.tasksData.hasOwnProperty('222')).toBe(true)
    expect(testState.tasksData['222']).toStrictEqual([])
    expect(testState.toDoListsData[1].id).toBe('222')
    expect(testState.toDoListsData[1].title).toBe('Test')

})
test('After adding the toDoList, the toDoList title should be "Test" and the ID = "222"', ()=>{
    let testState = reducer(state, { type: 'ADD_TO_DO_LIST', newToDoListId: '222', newToDoListTitle: 'Test' })
    expect(testState.toDoListsData[1].id).toBe('222')
    expect(testState.toDoListsData[1].title).toBe('Test')

})
