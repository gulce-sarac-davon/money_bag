import React , {FunctionComponent} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import { Text } from "react-native";
import { Container } from "../components/shared";
import { colors } from '../components/colors';
import RegularText from "../components/Texts/RegularText";
import SmallText from "../components/Texts/SmallText";
import { FontAwesome5 } from '@expo/vector-icons';
import RegularButton from "../components/Buttons/RegularButton";
const  background = require("./../assets/wallet_app_assets/assets/bgs/background_v1.png");


const WelcomeContainer= styled(Container)`
background-color: ${colors.secondary};
justify-content : space-between;
width:100%;
height:100%;


`;

const TopSection =styled.View`
width:100%;
flex:1;
max-height:55%;
`;

const BottomSection =styled.View`
width:100%;
padding:25px;
flex:1;
justify-content:flex-end;
`;

const TopImage=styled.Image`
width:100%;
height:100%;
resize-mode:stretch;

`;
export const Welcome :FunctionComponent=()=>{
return (
<> 
<StatusBar style="light"/>
<WelcomeContainer>
    <TopSection>
        <TopImage source={background}/>
    </TopSection>
    <BottomSection>
        <RegularText textStyles={{width:"70%" , marginBottom:25}}>Best Way To Track Money</RegularText>
        <SmallText textStyles={{width:"70%" , marginBottom:25}}>Best payment method connects your money friends and family</SmallText>
   <RegularButton onPress={()=>{}}>Get Started</RegularButton>
    </BottomSection>
</WelcomeContainer>


</>
);
};