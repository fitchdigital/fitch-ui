import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { InputTextArea } from '../src';

storiesOf('Input textarea', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <InputTextArea
            placeholder="Placeholder"
        />
    ))
    .add('interactive', () => (
        <InputTextArea
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'Placeholder')}
            label={text('label', 'A Label:')}
        />
    ));
