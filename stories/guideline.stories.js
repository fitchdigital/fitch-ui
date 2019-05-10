import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import {
    Spacer,
    Button,
    Checkbox,
    Radio,
    Switch,
    InputFile,
    InputSearch,
    InputText,
    List,
} from '../src';

class Parent extends PureComponent {

    static propTypes = {
        children: PropTypes.node,
    }

    render() {
        return this.props.children;
    }
}

const list = [
    { data: { fruit: 'Banana', emoji: '🍌' } },
    { data: { fruit: 'Strawberry', emoji: '🍓' } },
    { data: { fruit: 'Pineapple', emoji: '🍍' } },
    { data: { fruit: 'Peach', emoji: '🍑' } },
];

storiesOf('Guidelines', module)
    .add('all', () => (
        <Parent>
            <h1>Headings</h1>
            <Spacer medium />
            <h1>h1 Lorem ipsum dolor sit amet</h1>
            <Spacer small />
            <h2>h2 Lorem ipsum dolor sit amet</h2>
            <Spacer small />
            <h3>h3 Lorem ipsum dolor sit amet</h3>
            <Spacer small />
            <h4>h4 Lorem ipsum dolor sit amet</h4>
            <Spacer small />
            <h5>h5 Lorem ipsum dolor sit amet</h5>
            <Spacer small />
            <h6>h6 Lorem ipsum dolor sit amet</h6>
            <Spacer large />

            <h1>Paragraphs</h1>
            <Spacer medium />
            <p>p Lorem ipsum dolor sit amet</p>
            <Spacer small />
            <p className="small">p.small Lorem ipsum dolor sit amet</p>
            <Spacer large />

            <h1>Inputs</h1>
            <Spacer medium />
            <InputFile />
            <Spacer small />
            <InputSearch placeholder="Search" />
            <Spacer small />
            <InputText placeholder="Your name" />
            <Spacer large />

            <h1>Buttons</h1>
            <Spacer medium />
            <Button
                title="Primary"
                primary
            />
            <Button
                title="Secondary"
                secondary
            />
            <Button
                title="Minimal"
                minimal
            />
            <Spacer large />

            <h1>Toggles</h1>
            <Spacer medium />
            <Checkbox label="Checkbox" />
            <Spacer small />
            <Radio label="Radio" />
            <Spacer small />
            <Switch label="Switch" />
            <Spacer large />

            <h1>Lists</h1>
            <Spacer medium />
            <h6>Primary List</h6>
            <Spacer small />
            <List list={list} labels primary />
            <Spacer medium />
            <h6>Secondary List</h6>
            <Spacer small />
            <List list={list} labels secondary />
            <Spacer medium />
            <h6>Minimal List</h6>
            <Spacer small />
            <List list={list} labels />
            <Spacer large />

        </Parent>
    ));
