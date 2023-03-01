import { TodoTypes } from '@custom-types/todo';
import { useAppDispatch, useAppSelector } from '@hooks/useRedux';
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchAllTodos } from '@services/todos';
import { createModuleAction } from '@utils/reduxTools';
import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState: TodoTypes[] = [
  {
    id: '',
    userId: '',
    title: '',
    completed: false
  }
];

const fetchTodoAction = createModuleAction<TodoTypes[]>('Todo', 'fetchTodo');
const switchTodoStateAction = createAction<number>('switchTodoStateAction');

export const todoReducers = createReducer(initialState, (builder) => {
  builder.addCase(fetchTodoAction.success, (state, action) => {
    return action.payload;
  });
  builder.addCase(fetchTodoAction.error, (state) => {
    // eslint-disable-next-line unused-imports/no-unused-vars
    return state;
  });
  builder.addCase(switchTodoStateAction, (state, action) => {
    const todo = { ...state[action.payload], completed: !state[action.payload].completed };
    const newState = [...state, (state[action.payload] = todo)];
    state = newState;
  });
});

const fetchToDoSagaHandler = function* () {
  try {
    const data: TodoTypes[] = yield call(fetchAllTodos);
    yield put(fetchTodoAction.success(data));
  } catch (error) {
    yield put(fetchTodoAction.error());
  }
};

export const watcherSaga = function* () {
  yield takeLatest(fetchTodoAction.request.type, fetchToDoSagaHandler);
};

export const useStates = () => {
  const todos = useAppSelector((state) => state.todos);
  return { todos };
};

export const useActions = () => {
  const dispatch = useAppDispatch();
  const fetchTodos = () => dispatch(fetchTodoAction.request());
  const switchTodoState = (index: number) => dispatch(switchTodoStateAction(index));
  return { fetchTodos, switchTodoState };
};
