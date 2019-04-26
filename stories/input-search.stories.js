import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { InputSearch } from '../src';

storiesOf('Input search', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <InputSearch
            placeholder="Search"
        />
    ))
    .add('interactive', () => (
        <InputSearch
            disabled={boolean('disabled', false)}
            progress={boolean('progress', false)}
            placeholder={text('placeholder', 'Search')}
        />
    ));
