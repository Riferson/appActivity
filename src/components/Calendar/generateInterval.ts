import {eachDayOfInterval,format} from 'date-fns';
import { MarkedDateProps,DayProps } from '.';
import { getPlataformDate } from '../../utils/getPlataformDate';

export function GenerateIterval(start:DayProps, end:DayProps){
    let interval: MarkedDateProps={};

    eachDayOfInterval({start:new Date(start.timestamp), end:new Date(end.timestamp)})
    .forEach((item)=>{
        const date = format(getPlataformDate(item),'yyyy-MM-dd');
        console.log('date',date);
        interval = {
            ...interval,
            [date]:{
                color:'#610345',
                textColor:'white',
            }
        }
    });
    return interval;
}