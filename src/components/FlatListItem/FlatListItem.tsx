import * as React from "react";
import styled from "styled-components/native";

const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-color: grey;
`;

const ItemText = styled.Text`
    flex: 1;
    margin: 8px;
    color: grey;
`;
const ItemCountryText = styled.Text`
    flex: 3;
    margin: 8px;
    color: black;
`;

interface ICountryValue {
    name: string;
    goldMedalsNumber: number;
    silverMedalsNumber: number;
    bronzeMedalsNumber: number;
}

interface IListItemProps {
    item: ICountryValue;
    onPress?: () => void
}

const ListItem: React.FC<IListItemProps> = ({
                                           item, onPress
                                       }) => {
    return (
    <Wrapper>
        <ItemCountryText>{item.name}</ItemCountryText>
        <ItemText>{item.goldMedalsNumber || 0}</ItemText>
        <ItemText>{item.silverMedalsNumber || 0}</ItemText>
        <ItemText>{item.bronzeMedalsNumber || 0}</ItemText>
    </Wrapper>
)};
export default ListItem;
