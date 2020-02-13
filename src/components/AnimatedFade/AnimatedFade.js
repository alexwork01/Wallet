import React, {Component} from "react";
import {Animated, Easing} from "react-native";
import PropTypes from "prop-types";

export class AnimatedFade extends Component {
    static propTypes = {
        delay: PropTypes.number,
        visible: PropTypes.bool,
        duration: PropTypes.number,
    };

    static defaultProps = {
        delay: 0,
        duration: 500
    };

    state = {
        visible: this.props.visible
    };

    componentWillMount() {
        this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.visible) {
            this.setState({visible: true});
        }

        Animated.timing(this._visibility, {
            toValue: nextProps.visible ? 1 : 0,
            duration: this.props.duration,
            delay:this.props.delay,
            easing: Easing.linear
        }).start(() => {
            this.setState({visible: nextProps.visible});
        });
    }

    render() {
        const {visible, style, children, ...rest} = this.props;

        const containerStyle = {
            opacity: this._visibility.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
            }),
            transform: [
                {
                    scale: this._visibility.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.1, 1]
                    })
                }
            ]
        };

        const combinedStyle = [containerStyle, style];
        return (
            <Animated.View
                style={this.state.visible ? combinedStyle : containerStyle}
                {...rest}
            >
                {this.state.visible ? children : null}
            </Animated.View>
        );
    }
}
