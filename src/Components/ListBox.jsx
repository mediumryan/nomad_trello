import React from 'react';
import { useRecoilState } from 'recoil';
import { list } from '../atom';
import { styled } from 'styled-components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const ListWrapper = styled.ul`
    background-color: ${(props) => props.theme.bg_200};
    padding: 24px 48px;
    border-radius: 20px;
`;

const ListItems = styled.li`
    background-color: ${(props) => props.theme.bg_300};
    color: red;
    padding: 12px 24px;
    margin-bottom: 12px;
    border-radius: 10px;
    font-size: 20px;
`;

export default function ListBox() {
    const [listItem, setListItem] = useRecoilState(list);

    const onDragEnd = () => {};

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                <Droppable droppableId="one">
                    {(magic) => (
                        <ul ref={magic.innerRef} {...magic.droppableProps}>
                            <Draggable draggableId="first" index={0}>
                                {(magic) => {
                                    return (
                                        <li
                                            ref={magic.innerRef}
                                            {...magic.dragHandleProps}
                                            {...magic.draggableProps}
                                        >
                                            One
                                        </li>
                                    );
                                }}
                            </Draggable>
                            <Draggable draggableId="second" index={1}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.dragHandleProps}
                                        {...magic.draggableProps}
                                    >
                                        Two
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}
