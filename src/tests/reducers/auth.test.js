import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'useridhere';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer(undefined, action);
    expect(state.uid).toBe(uid);
});

test('should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'useridhere' }, action);
    expect(state).toEqual({});
});
