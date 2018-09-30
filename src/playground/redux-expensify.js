import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Expenses reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if ( expense.id === action.id ) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
}

// Filters Reducer

const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startdate: undefined,
    endDate: undefined,
};

const filtersReducer = ( state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch( addExpense({ description: 'Rent', amount: 100 }) );
const expenseTwo = store.dispatch( addExpense({ description: 'Horse', amount: 340 }) );

store.dispatch( removeExpense({ id: expenseOne.expense.id }) );
store.dispatch( editExpense( expenseTwo.expense.id, { amount: 500 }) );

store.dispatch( setTextFilter('rent') );
store.dispatch( setTextFilter() );

store.dispatch( sortByAmount() );
store.dispatch( sortByDate() );

const demoState = {
    expenses: [{
        id: 'sdfsdfdss',
        description: 'Jan Rent',
        note: 'This is a long note for payement',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startdate: undefined,
        endDate: undefined,
    }
};
