import * as React from "react";
import styled from "styled-components/native";


const ButtonWrapper = styled.TouchableOpacity`
    background-color: blue;
    elevation: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 39px;
    max-height: 39px;
    opacity: ${props => (props.disabled ? "0.5" : "1")};
    border-radius: 5px;
`;

const ButtonText = styled.Text`
    font-weight: bold;
    color: #ffffff;
    font-size: 16px;
    margin: 8px;
`;

interface IButtonProps {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    testID?: string;
}

const Button: React.FC<IButtonProps> = ({
                                            testID, title, onPress, disabled = false
                                        }) => (
    <ButtonWrapper testID={testID} onPress={onPress} disabled={disabled}>
        <ButtonText>
            {title}
        </ButtonText>
    </ButtonWrapper>
);

export default Button;
