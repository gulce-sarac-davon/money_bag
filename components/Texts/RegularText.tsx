import React , {FunctionComponent} from "react";
import styled from "styled-components";
import { colors } from '../colors';
import {TextProps} from "./types";
const StyledText=styled.Text`
font-size:30px;
color:${colors.gray};
text-align: left;
font-family:OpenSans-Bold;
`;
const RegularText: FunctionComponent<TextProps> =(props)=>{
    return <StyledText style={props.textStyles}>{props.children} </StyledText>;
};
export default RegularText;