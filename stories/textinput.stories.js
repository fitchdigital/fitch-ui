import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { TextInput } from '../src';

const testValidate = value => value.length > 3;

storiesOf('TextInput', module)
    .addDecorator(withKnobs)
    .add('default', () => (
        <TextInput
            placeholder="Placeholder"
        />
    ))
    .add('interactive', () => (
        <TextInput
            password={boolean('password', false)}
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'Placeholder')}
            label={text('label', 'A Label:')}
        />
    ))
    .add('has validation', () => (
        <TextInput
            placeholder="Placeholder"
            validate={testValidate}
        />
    ))
