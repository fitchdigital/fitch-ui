import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import { InputFile } from '../src';

storiesOf('Input file', module)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add('default', () => (
        <InputFile />
    ))
    .add('multiple with accept', () => (
        <InputFile
            placeholder="Choose files..."
            multiple
            accept=".jpg, .jpeg, .png"
        />
    ))
    .add('localisation', () => (
        <InputFile
            placeholder="Escolha um ficheiro..."
            placeholderMultiple="{count} ficheiros selecionados"
            multiple
        />
    ))
    .add('interactive', () => (
        <InputFile
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'Choose a file...')}
            placeholderMultiple={text('placeholderMultiple', '{count} files selected')}
            label={text('label', 'A Label:')}
        />
    ));
