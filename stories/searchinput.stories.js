import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { SearchInput } from '../src';

const testValidate = value => value.length > 3;

storiesOf('SearchInput', module)
    .addDecorator(withKnobs)
    .add('default', withInfo()(() => (
        <SearchInput
            placeholder="Search"
        />
    )))
    .add('interactive', () => (
        <SearchInput
            disabled={boolean('disabled', false)}
            progress={boolean('progress', false)}
            placeholder={text('placeholder', 'Search')}
        />
    ));
