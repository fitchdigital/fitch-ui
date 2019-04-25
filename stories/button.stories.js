import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Button } from '../src';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('primary', () => (
        <Button
            title="Primary"
            primary
        />
    ))
    .add('secondary', () => (
        <Button
            title="Secondary"
            secondary
        />
    ))
    .add('minimal', () => (
        <Button
            title="Minimal"
            minimal
        />
    ))
    .add('interactive', () => (
        <Button
            primary
            disabled={boolean('disabled', false)}
            title={text('title', 'Button')}
        />
    ));
