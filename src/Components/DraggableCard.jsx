import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { styled } from 'styled-components';

const ListItems = styled.li`
    background-color: ${(props) => props.theme.bg_300};
    color: red;
    padding: 12px 24px;
    margin-bottom: 12px;
    border-radius: 10px;
    font-size: 20px;
`;

const DraggableCard = ({ list, index }) => {
    return (
        <Draggable draggableId={list} index={index}>
            {(magic) => {
                return (
                    <ListItems
                        ref={magic.innerRef}
                        {...magic.dragHandleProps}
                        {...magic.draggableProps}
                    >
                        {list}
                    </ListItems>
                );
            }}
        </Draggable>
    );
};

export default React.memo(DraggableCard);
