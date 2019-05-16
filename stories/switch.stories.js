import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Switch } from '../src';

storiesOf('Switch', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <Switch label="Label" />
    ))
    .add('default with error', () => (
        <Switch label="Label" error="this field is required" />
    ))
    .add('interactive', () => (
        <Switch
            disabled={boolean('disabled', false)}
            label={text('label', 'Label')}
        />
    ));
