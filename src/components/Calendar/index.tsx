import React from "react";
import {Feather} from '@expo/vector-icons';
import {ptBR} from './localConfig';
import { GenerateIterval } from "./generateInterval";

import {Calendar as CustomCalendar,LocaleConfig,CalendarProps}  from 'react-native-calendars';
import { useTheme } from "styled-components";

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale ='pt-br';

interface MarkedDateProps{
    [date:string]:{
        color:string;
        textColor:string;
        disabled?:boolean;
        disableTouchEvent?:boolean;
    }
}

interface DayProps{
    dateString:string;
    day:number;
    month:number;
    year:number;
    timestamp:number;
}

function Calendar({markedDates,onDayPress}:CalendarProps){
    const theme = useTheme();
    return(
        <CustomCalendar
            renderArrow={(direction) =>
                <Feather size={24} color={'#00171F'} name={direction == 'left' ? 'chevron-left' : 'chevron-right'}/>
            }
            headerStyle={{
                backgroundColor:'#00A7E1',
                borderBottomWidth:0.5,
                borderBottomColor:'#003459',
                paddingBottom:10,
                marginBottom:10,
            }}
            theme={{
                textDayFontFamily:'Roboto',
                textDayHeaderFontFamily:'Roboto',
                textDayHeaderFontSize:10,
                textMonthFontFamily:'Roboto',
                textMonthFontSize:20,
                monthTextColor:'#00171F',
                arrowStyle:{
                    marginHorizontal:-15,
                }
            }}

            firstDay={1}
            minDate = {String(new Date())}
            markingType='period'
            markedDates={markedDates}
            onDayPress={onDayPress}
        />
    );
}

export{
    Calendar,MarkedDateProps,DayProps,GenerateIterval
}