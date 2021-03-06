import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Radio } from '../src';

storiesOf('Radio', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <Radio label="Label" />
    ))
    .add('default with error', () => (
        <Radio label="Label" error="this field is required" />
    ))
    .add('interactive', () => (
        <Radio
            disabled={boolean('disabled', false)}
            label={text('label', 'Label')}
        />
    ));
