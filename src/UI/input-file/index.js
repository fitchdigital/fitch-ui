import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import IconCloudUpload from '../../svg/icon-cloud-upload';
import { excludeFactoryProps } from '../../utils';
import './style.scss';

export class InputFile extends PureComponent {

    static propTypes = {
        disabled: PropTypes.bool,
        focus: PropTypes.bool,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        label: PropTypes.string,
        placeholderMultiple: PropTypes.string,
    }

    static defaultProps = {
        placeholder: 'Choose a file...',
        placeholderMultiple: '{count} files selected',
    }

    state = {
        placeholder: this.props.placeholder,
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e);
        }

        let placeholder = this.props.placeholder;

        if (this.input.files && this.input.files.length > 1) {
            placeholder = (this.input.getAttribute('data-multiple-caption') || '')
                .replace('{count}', this.input.files.length);
        } else {
            placeholder = this.input.files[0].name.split('\\').pop();
        }

        this.setState({
            placeholder,
        });
    }

    render() {
        const classes = classNames({
            'input-file': true,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
        });

        const props = excludeFactoryProps([
            'disabled',
            'focus',
            'label',
            'onChange',
            'placeholder',
            'placeholderMultiple',
            'type',
        ], this.props);

        return (
            <div className={classes}>
                <label>
                    { this.props.label &&
                        <div className="label">
                            {this.props.label}
                        </div>
                    }

                    <div className="element">
                        <input
                            ref={(e) => { this.input = e; }}
                            type="file"
                            className="inputfile"
                            data-multiple-caption={this.props.placeholderMultiple}
                            disabled={!!this.props.disabled}
                            onChange={this.handleChange}
                            {...props}
                        />
                        <div className="upload-icon">
                            <IconCloudUpload />
                        </div>

                        <div className="placeholder">
                            {this.state.placeholder}
                        </div>
                    </div>
                </label>
            </div>
        );
    }
}
