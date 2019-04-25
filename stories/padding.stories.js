import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Padding } from '../src';

storiesOf('Padding', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('interactive', () => (
        <Padding
            debug={boolean('debug', true)}
        >
            <div>resize window</div>
        </Padding>
    ));
