import React from 'react';
import { useRecoilState } from 'recoil';
import { list } from '../atom';
import { styled } from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import DraggableCard from './DraggableCard';

const ListWrapper = styled.ul`
    background-color: ${(props) => props.theme.bg_200};
    padding: 24px 48px;
    border-radius: 20px;
`;

export default function ListBox() {
    const [listItem, setListItem] = useRecoilState(list);

    const onDragEnd = ({ source, destination, draggableId }) => {
        if (!destination) {
            return;
        }
        setListItem((prev) => {
            const newList = [...prev];
            newList.splice(source.index, 1);
            newList.splice(destination.index, 0, draggableId);
            return newList;
        });
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {(magic) => (
                        <ListWrapper
                            ref={magic.innerRef}
                            {...magic.droppableProps}
                        >
                            {listItem.map((list, index) => {
                                return (
                                    <DraggableCard
                                        key={list}
                                        list={list}
                                        index={index}
                                    />
                                );
                            })}
                            {magic.placeholder}
                        </ListWrapper>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

// DND 후 위치 변경
// onDragEnd 함수의 인자값을 이용한다. destination , source 의 각 인덱스값 그리고 draggableId가 키가 된다.
// 기존 state의 복사본을 만들고,
// source의 index번째 아이템을 삭제 후에,
// destination의 index번째에 draggableId를 추가한다.
// key === draggableId 필수조건이다. --- 중요함! 안그러면 에러남!
