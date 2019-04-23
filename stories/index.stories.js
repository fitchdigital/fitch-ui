import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button } from '@storybook/react/demo';

import { TextInput } from '../src';

// storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
// storiesOf('Button', module)
//   .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>
//       <span role="img" aria-label="so cool">
//         😀 😎 👍 💯
//       </span>
//     </Button>
//   ));

const testValidate = value => value.length > 3;

storiesOf('Text Input', module)
    .add('default', () => (
        <TextInput placeholder="Default" />
    ))
    .add('with validation', () => (
        <TextInput placeholder="Default" validate={testValidate} />
    ));
