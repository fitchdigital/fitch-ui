import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Spacer } from '../src';

storiesOf('Spacer', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('small', () => (
        <Spacer small debug />
    ))
    .add('medium', () => (
        <Spacer medium debug />
    ))
    .add('large', () => (
        <Spacer large debug />
    ))
    .add('interactive', () => (
        <Spacer
            small={boolean('small', true)}
            medium={boolean('medium', true)}
            large={boolean('large', true)}
            debug={boolean('debug', true)}
        />
    ));
