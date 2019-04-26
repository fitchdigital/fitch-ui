import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { InputText } from '../src';

const testValidate = value => value.length > 3;

storiesOf('Input text', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <InputText
            placeholder="Placeholder"
        />
    ))
    .add('default with error', () => (
        <InputText placeholder="Placeholder" error="this field is required" />
    ))
    .add('interactive', () => (
        <InputText
            password={boolean('password', false)}
            progress={boolean('progress', false)}
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'Placeholder')}
            label={text('label', 'A Label:')}
        />
    ))
    .add('has validation', () => (
        <InputText
            placeholder="Placeholder"
            validate={testValidate}
        />
    ));
