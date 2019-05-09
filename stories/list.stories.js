/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { List } from '../src';

// fake component to render on <li>
class Component extends PureComponent {

    handleClick(fruit) {
        alert(`You clicked on ${fruit}`); // eslint-disable-line
    }

    render() {
        return (
            <div className="list__tab">
                { Object.keys(this.props).map((prop, i) => (
                    <div key={`custom-${i}`}>
                        {this.props[prop]}
                        {i === 0 &&
                            <button
                                type="button"
                                onClick={() => this.handleClick(this.props[prop])}
                            >
                                click me
                            </button>
                        }
                    </div>
                ))}
            </div>
        );
    }
}

const simple = [
    {
        data: { title: 'banana', emoji: '🍌' },
    },
    {
        data: { title: 'strawberry', emoji: '🍓' },
    },
    {
        data: { title: 'pineapple', emoji: '🍍' },
    },
    {
        data: { title: 'peach', emoji: '🍑' },
    },
];

const custom = [
    {
        component: Component,
        data: { title: 'banana', emoji: '🍌' },
    },
    {
        component: Component,
        data: { title: 'strawberry', emoji: '🍓' },
    },
    {
        component: Component,
        data: { title: 'pineapple', emoji: '🍍' },
    },
    {
        component: Component,
        data: { title: 'peach', emoji: '🍑' },
    },
];

storiesOf('List', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('primary', () => (
        <List
            list={simple}
            labels
            primary
        />
    ))
    .add('secondary', () => (
        <List
            list={simple}
            labels
            secondary
        />
    ))
    .add('interactive', () => (
        <List
            list={simple}
            labels={boolean('labels', true)}
            primary={boolean('primary', true)}
            secondary={boolean('secondary', false)}
        />
    ))
    .add('primary with custom component', () => (
        <List
            list={custom}
            primary
            labels
        />
    ));
