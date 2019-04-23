import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Radio } from '../src';

const testValidate = value => value.length > 3;

storiesOf('Radio', module)
    .addDecorator(withKnobs)
    .add('default', withInfo()(() => (
        <Radio />
    )))
    .add('interactive', () => (
        <Radio
            disabled={boolean('disabled', false)}
            label={text('label', 'Label')}
        />
    ));
