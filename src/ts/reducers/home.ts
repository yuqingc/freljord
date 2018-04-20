import immutable from 'immutable';
import { IHomeAction } from 'actions';

interface IHomeState {
    name: string
    age: number
}

const initalState: any = immutable.fromJS({
    name: 'Matt',
    age: 20,
} as IHomeState);

export default function home (state = initalState, action: IHomeAction) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return state.set('name', action.name);
        default:
            return state;
    }
}
