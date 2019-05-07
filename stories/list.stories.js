/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { List } from '../src';

// fake label component
class Label extends PureComponent {
    render() {
        return (
            <div>Label</div>
        );
    }
}

// fake component to render on <li>
class Component extends PureComponent {
    render() {
        return (
            <div>List Item</div>
        );
    }
}

const list = [
    {
        uid: 0,
        component: Component,
    },
    {
        uid: 1,
        component: Component,
    },
    {
        uid: 2,
        component: Component,
    },
    {
        uid: 3,
        component: Component,
    },
];

storiesOf('List', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('primary', () => (
        <List
            label={Label}
            list={list}
            primary
        />
    ))
    .add('secondary', () => (
        <List
            label={Label}
            list={list}
            secondary
        />
    ));
