import React, {useState} from "react";
import {FlatList} from "react-native";
import styled from 'styled-components/native';
import FlatListItem from "src/components/FlatListItem";
import PrimaryButton from "src/components/PrimaryButton";

const ListWrapperHeader = styled.View`
    width: 330px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-width: 1px;
    border-color: grey;
`;

const FlatListWrapper = styled.View`
    flex: 6;
    justify-content: center;
    align-items: center;
`;

const Container = styled.View`
    flex: 1;
    padding: 35px;
    align-items: center;
    justify-content: flex-start;
`;

const TextInputWrapper = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;

const CustomTextInput = styled.TextInput`
    margin: 8px;
`;

const TitleText = styled.Text`
    font-size: 32px;
    margin-bottom: 40px;
    font-weight: bold;
`;

const ItemText = styled.Text`
    flex: 1;
    margin: 8px;
    justify-content: center;
    font-weight: bold;
`;

const ItemCountryText = styled.Text`
    flex: 3;
    margin: 8px;
    justify-content: center;
    font-weight: bold;
`;

const ErrorText = styled.Text`
    color: red;
    margin: 8px;
`;

interface ICountryValue {
    name: string;
    goldMedalsNumber: string | undefined;
    silverMedalsNumber: string | undefined;
    bronzeMedalsNumber: string | undefined;
}

export default function HomeScreen() {
    const [value, setValue] = useState<string>("");
    const [goldAmount, setGoldAmount] = useState<string | undefined>(undefined);
    const [silverAmount, setSilverAmount] = useState<string | undefined>(undefined);
    const [bronzeAmount, setBronzeAmount] = useState<string | undefined>(undefined);
    const [countryValueList, setCountryValues] = useState<ICountryValue[]>([]);
    const [error, setError] = useState<string | undefined>(undefined);

    const handleSubmit = (): void => {
        setError(undefined);
        const isInputValid = value.length > 0 && (goldAmount > 0 || silverAmount > 0 || bronzeAmount > 0);
        isInputValid && setCountryValues([...countryValueList,
            {
                name: value,
                goldMedalsNumber: goldAmount,
                silverMedalsNumber: silverAmount,
                bronzeMedalsNumber: bronzeAmount
            }]);
        !isInputValid && setError('Please enter the country and amount of medals!');
    };

    const FlatListHeader = (
        <ListWrapperHeader>
            <ItemCountryText>Country</ItemCountryText>
            <ItemText>Gold</ItemText>
            <ItemText>Silver</ItemText>
            <ItemText>Bronze</ItemText>
        </ListWrapperHeader>);

    const sortedData = () => countryValueList.sort((a, b) => {
        const sortValueA = parseInt(a.goldMedalsNumber + a.silverMedalsNumber + a.bronzeMedalsNumber);
        const sortValueB = parseInt(b.goldMedalsNumber + b.silverMedalsNumber + b.bronzeMedalsNumber);
          return sortValueA - sortValueB;
    });

    return (
        <Container>
            <TitleText>Olympic medal List</TitleText>
            <TextInputWrapper>
                <CustomTextInput
                    placeholder="Country"
                    value={value}
                    maxLength={25}
                    onChangeText={setValue}
                    onFocus={() => setError(undefined)}
                />
                <CustomTextInput
                    placeholder="Gold"
                    keyboardType="number-pad"
                    value={goldAmount}
                    maxLength={3}
                    onChangeText={setGoldAmount}
                    onFocus={() => setError(undefined)}
                />
                <CustomTextInput
                    placeholder="Silver"
                    keyboardType="number-pad"
                    value={silverAmount}
                    maxLength={3}
                    onChangeText={setSilverAmount}
                    onFocus={() => setError(undefined)}
                />
                <CustomTextInput
                    placeholder="Bronze"
                    keyboardType="number-pad"
                    value={bronzeAmount}
                    maxLength={3}
                    onChangeText={setBronzeAmount}
                    onFocus={() => setError(undefined)}
                />
                <PrimaryButton title="Add" onPress={handleSubmit}/>
            </TextInputWrapper>
            {error && <ErrorText>{error}</ErrorText>}
            <FlatListWrapper>
                <FlatList
                    data={sortedData()}
                    renderItem={({item}) => <FlatListItem item={item}/>}
                    keyExtractor={(item: ICountryValue, index) => `key-${index}`}
                    ListHeaderComponent={FlatListHeader}
                />
            </FlatListWrapper>
        </Container>
    );
}
