import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { Switch } from '../src';

const testValidate = value => value.length > 3;

storiesOf('Switch', module)
    .addDecorator(withKnobs)
    .add('default', withInfo()(() => (
        <Switch />
    )))
    .add('interactive', () => (
        <Switch
            disabled={boolean('disabled', false)}
            label={text('label', 'Label')}
        />
    ));
