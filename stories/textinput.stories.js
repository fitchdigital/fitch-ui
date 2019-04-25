import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { TextInput } from '../src';

const testValidate = value => value.length > 3;

storiesOf('TextInput', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <TextInput
            placeholder="Placeholder"
        />
    ))
    .add('interactive', () => (
        <TextInput
            password={boolean('password', false)}
            progress={boolean('progress', false)}
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
    ));
