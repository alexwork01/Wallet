import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import {InputItem, InputText, InputWrapper} from "./styled";

export class CardInput extends PureComponent {
    static propTypes = {
        count: PropTypes.number,
        isDisabled:  PropTypes.bool,
        initialValue:  PropTypes.string,
        numberOfDigits: PropTypes.number,
        requestCallback: PropTypes.func,
    };

    static defaultProps = {
        count: 4,
        isDisabled: false,
        initialValue: '',
        numberOfDigits: 4,
    };

    state = {
        fields: [],
        focusId: null,
    };

    fieldRefs = {};

    componentDidMount() {
        const { count, initialValue, numberOfDigits } = this.props;
        const fields = [];

        for (let i = 0; i < count; i++) {
            fields[i] =  initialValue.slice(i * numberOfDigits, (i + 1) * numberOfDigits);
            this.fieldRefs[i] = React.createRef();
        }

        this.setState(state => ({ fields }));
    }

    componentDidUpdate(prevProps, prevState) {
        const { fields, focusId } = this.state;
        const { fields: prevFields, focusId: prevFocusId } = prevState;
        const { requestCallback, numberOfDigits } = this.props;

        if (prevFocusId === null && focusId === null) {
            this.fieldRefs[0].current.focus();
        }

        const isFocusChanged = prevFocusId !== focusId && focusId !== null;
        isFocusChanged && this.fieldRefs[focusId].current.focus();


        const isFilled = !fields.some(field => field.length < numberOfDigits);
        const isFilledChanges = fields.some((field, index) => field !== prevFields[index]);

        isFilledChanges && requestCallback && requestCallback(fields.join(''));
    }

    validate = value => ( value.replace(/[^\d]/g, ''));

    getNextFocusIndex = focusId => {
        const { fields } = this.state;
        const { count, numberOfDigits } = this.props;

        if(focusId === count) {
            return focusId;
        }

        for( let i = focusId + 1; i < count; i++ ) {
            if(fields[i].length < numberOfDigits) {
                return i;
            }
        }

        return count - 1;
    };

    handleChangeText = ( value ) => {
        const { fields, focusId } = this.state;
        const { numberOfDigits } = this.props;

        const newValue = this.validate(value);
        const newFields = [...fields];

        newFields[focusId] = newValue;

        if(newValue.length > numberOfDigits) {
            const inputValue = newFields.join('');

            for(let i = 0; i < newFields.length; i++ ) {
                newFields[i] =  inputValue.slice(i * numberOfDigits, (i + 1) * numberOfDigits);
            }
        }

        const nextFocusId = newFields[focusId].length < numberOfDigits
            ? focusId
            : this.getNextFocusIndex(focusId);

        this.setState(state => ({
            fields: newFields,
            focusId: nextFocusId,
        }));
    };

    handleFocus = (index) => {
        this.setState(state => ({ focusId: index }));
    };

    handleBlur = () => {
         this.setState(state => ({ focusId: null }));
    };


    handleKeyPress =  ({ nativeEvent }) => {
        const { key } = nativeEvent;
        const { fields, focusId } = this.state;

        if(key === 'Backspace') {
            if(!fields[focusId].length && focusId > 0) {
                 this.setState(state => ({ focusId: focusId - 1 }));
            }
        }
    };

    render() {
        const { count, isDisabled, numberOfDigits } = this.props;
        const { fields, focusId } = this.state;
        const {
            fieldRefs,
            handleBlur,
            handleKeyPress,
            handleFocus,
            handleChangeText
        } = this;

        return (
            <InputWrapper>
                {fields.map((value, index) => (
                    <InputItem key={'input' + index}>
                        <InputText
                            ref={fieldRefs[index]}
                            value={value}
                            onChangeText={handleChangeText}
                            onFocus={() => handleFocus(index)}
                            onSubmitEditing={handleBlur}
                            keyboardType="numeric"
                            onKeyPress = {handleKeyPress}
                            maxLength={numberOfDigits}
                            editable={!isDisabled}
                            isActive={focusId === index}
                        />
                    </InputItem>
                ))}
            </InputWrapper>
        )
    }
}


