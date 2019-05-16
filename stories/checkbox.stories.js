import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Checkbox } from '../src';

storiesOf('Checkbox', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <Checkbox label="Label" />
    ))
    .add('default with error', () => (
        <Checkbox label="Label" error="this field is required" />
    ))
    .add('interactive', () => (
        <Checkbox
            disabled={boolean('disabled', false)}
            label={text('label', 'Label')}
        />
    ));
