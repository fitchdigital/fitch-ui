import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { InputTextArea } from '../src';

const testValidate = value => value.length > 3;

storiesOf('Input textarea', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <InputTextArea
            placeholder="Placeholder"
        />
    ));
