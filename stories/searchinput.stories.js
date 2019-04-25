import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { SearchInput } from '../src';

storiesOf('SearchInput', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <SearchInput
            placeholder="Search"
        />
    ))
    .add('interactive', () => (
        <SearchInput
            disabled={boolean('disabled', false)}
            progress={boolean('progress', false)}
            placeholder={text('placeholder', 'Search')}
        />
    ));
