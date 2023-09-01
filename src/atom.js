import { atom } from 'recoil';

export const list = atom({
    key: 'list-item',
    default: ['a', 'b', 'c', 'd', 'e'],
});
