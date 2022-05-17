import React, { FunctionComponent } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import styled from "styled-components";
import { colors } from '../colors';
import RegularText from '../Texts/RegularText';
import SmallText from '../Texts/SmallText';
const StyledView = styled.View`
flex-direction:column;
flex:1;
justify-content:center;
`;

interface GreetingProps {
    maninText: string;
    subText: string;
    mainTextStyles?: StyleProp<TextStyle>;
    subTextStyles?: StyleProp<TextStyle>

}

const Greeting: FunctionComponent<GreetingProps> = (props) => {
    return (<StyledView>
        <RegularText
            textStyles={[{
                color: colors.secondary,
                fontSize: 22,
            },
            props.mainTextStyles,

            ]


            }>
            {props.maninText}
        </RegularText>
        <SmallText
        textStyles={[
            {color:colors.graydark,},
            props.subTextStyles,
        ]}>
{props.subText}
        </SmallText>
    </StyledView>);
};

export default Greeting;