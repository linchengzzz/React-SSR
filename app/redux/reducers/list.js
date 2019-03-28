const defaultState = {
    list: [
        'list1',
        'list2',
        'list3'
    ]
};

export default function (state = defaultState, action = {}) {
    switch (action.type) {
        default:
            return state
    }
}
