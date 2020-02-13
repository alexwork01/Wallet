import React, {Component} from "react";
import {Animated, Easing} from "react-native";
import PropTypes from "prop-types";

export class AnimatedHeight extends Component {
    static propTypes = {
        from: PropTypes.number,
        to: PropTypes.number,
        duration: PropTypes.number,
        delay:  PropTypes.number,
    };

    static defaultProps = {
        delay: 0,
        duration: 500
    };

    state = {
        height: this.props.from
    };

    componentWillMount() {
        this._height = new Animated.Value(this.props.from);
    }

    componentWillReceiveProps(nextProps) {
        Animated.timing(this._height, {
            toValue: nextProps.to,
            duration: this.props.duration,
            delay: this.props.delay,
            easing: Easing.linear
        }).start(() => {
            this.setState({height: nextProps.to});
        });
    }

    render() {
        const {style, children, ...rest} = this.props;

        const containerStyle = {
            height: this._height
        };

        const combinedStyle = [containerStyle, style];
        return (
            <Animated.View
                style={combinedStyle}
                {...rest}
            >
                {children}
            </Animated.View>
        );
    }
}
