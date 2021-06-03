export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return { friends: [...state.friends,
                {
                name: action.friend.name,
                hometown: action.friend.hometown,
                id: action.friend.id
            }]}
        case 'REMOVE_FRIEND':
            const newFriends = [];
            state.friends.forEach(friend => {
                if(friend.id !== action.id){
                    newFriends.push(friend)
                }
            })
            return { friends: newFriends }
        default:
            return state
    }
}
