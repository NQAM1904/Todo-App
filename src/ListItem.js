import React from 'react';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
const ListItem = props => {
    const items = props.items;
    const listItems = items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p>
                    <input
                        type="text"
                        id={item.key}
                        value={item.text}
                        onChange={(e) => {
                            props.setUpdate(e.target.value, item.key)
                        }}
                    />
                    <span>
                        <FontAwesomeIcon className="faicon" icon="trash"
                            onClick={() => props.deleteItem(item.key)} />
                    </span>
                </p>

            </div>
        )
    })
    return (
        <h1>
            <FlipMove duration={300} easing="ease-in-out" >
                {listItems}
            </FlipMove>

        </h1>
    )
}

export default ListItem;