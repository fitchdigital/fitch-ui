import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import './style.scss';
import './primary.scss';
import './secondary.scss';
import './minimal.scss';

export class Button extends PureComponent {

    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.func,
        onClick: PropTypes.func,
        to: PropTypes.string,
        href: PropTypes.string,
        target: PropTypes.string,
        primary: PropTypes.bool,
        secondary: PropTypes.bool,
        minimal: PropTypes.bool,
        hover: PropTypes.bool,
        disabled: PropTypes.bool,
    }

    static defaultProps = {
        target: '_blank',
    }

    renderContent() {
        const { title, icon } = this.props;
        const Icon = icon;
        return (
            <div className="label">
                { title &&
                    <p>{title}</p>
                }
                { icon &&
                    <Icon />
                }
            </div>
        );
    }

    render() {
        const classes = classNames({
            button: true,
            hover: this.props.hover === true,
            disabled: this.props.disabled === true,
            primary: !!this.props.primary,
            secondary: !!this.props.secondary,
            minimal: !!this.props.minimal,
        });

        if (!this.props.primary && !this.props.secondary && !this.props.minimal) {
            console.warn('no theme in button');
        }

        if (this.props.onClick) {
            return (
                <button type="button" className={classes} onClick={this.props.onClick}>
                    {this.renderContent()}
                </button>
            );
        }

        if (this.props.to) {
            return (
                <NavLink to={this.props.to} className={classes} activeClassName="active">
                    {this.renderContent()}
                </NavLink>
            );
        }

        if (this.props.href) {
            return (
                <a href={this.props.href} target={this.props.target} className={classes}>
                    {this.renderContent()}
                </a>
            );
        }

        return (
            <button type="submit" className={classes}>
                {this.renderContent()}
            </button>
        );
    }
}
