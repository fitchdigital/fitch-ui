import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Checkbox } from '../src';

const testValidate = value => value.length > 3;

storiesOf('Checkbox', module)
    .addDecorator(withKnobs)
    .add('default', withInfo()(() => (
        <Checkbox />
    )))
    .add('interactive', () => (
        <Checkbox
            disabled={boolean('disabled', false)}
            label={text('label', 'Label')}
        />
    ));
