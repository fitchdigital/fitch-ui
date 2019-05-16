/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { List } from '../src';

// fake component to render on <li>
class Component extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        emoji: PropTypes.string,
    }

    handleClick(emoji) {
        alert(`You clicked on ${emoji}`); // eslint-disable-line
    }

    render() {
        return (
            <div className="list__tab">
                <div>
                    <span>When you</span>
                    <button
                        type="button"
                        onClick={() => this.handleClick(this.props.emoji)}
                    >
                        click
                    </button>
                    <span>
                        {this.props.title}
                    </span>
                </div>
                <div>
                    <span>You will get a </span>
                    {this.props.emoji}
                </div>
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
        customProp: 'this gets passed into component',
        data: { title: 'banana', emoji: '🍌' },
    },
    {
        component: Component,
        customProp: 'this gets passed into component',
        data: { title: 'strawberry', emoji: '🍓' },
    },
    {
        component: Component,
        customProp: 'this gets passed into component',
        data: { title: 'pineapple', emoji: '🍍' },
    },
    {
        component: Component,
        customProp: 'this gets passed into component',
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
            labels
        />
    ));
