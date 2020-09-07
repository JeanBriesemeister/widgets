import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Gree',
        value: 'gree'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    },
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropDown, setShowDropDown] = useState(true);

    return (
        <div>
            <button onClick={() => setShowDropDown(!showDropDown)}>Toogle DropDown</button>
            {showDropDown ?
                <DropDown
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                />
                : null
            }
            <Accordion items={items} />
            <Search />
        </div>
    )
};