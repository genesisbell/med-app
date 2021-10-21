import React from 'react';
import { 
    CartesianGrid,
    LineChart, 
    Line,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';


export default function Graph(){


    const charts = [
        
        {
            id: 1,
            title: '23 Semanas de gestación',
            data: [
                {daysFromBirth: 0, pt: 40, et: 80,},
                {daysFromBirth: 1, pt: 70, et: 130,},
                {daysFromBirth: 2, pt: 100, et: 180,},
                {daysFromBirth: 3, pt: 130, et: 230,},
                {daysFromBirth: 4, pt: 130, et: 230,},
                {daysFromBirth: 5, pt: 130, et: 230,},
                {daysFromBirth: 6, pt: 130, et: 230,},
                {daysFromBirth: 7, pt: 130, et: 230,},
                {daysFromBirth: 8, pt: 130, et: 230,},
                {daysFromBirth: 9, pt: 130, et: 230,},
                {daysFromBirth: 10, pt: 130, et: 230,},
                {daysFromBirth: 11, pt: 130, et: 230,},
                {daysFromBirth: 12, pt: 130, et: 230,},
                {daysFromBirth: 13, pt: 130, et: 230,},
                {daysFromBirth: 14, pt: 130, et: 230,},
            ]
        },        
        {
            id: 2,
            title: '24 Semanas de gestación',
            data: [
                {daysFromBirth: 0, pt: 40, et: 80,},
                {daysFromBirth: 1, pt: 70, et: 130,},
                {daysFromBirth: 2, pt: 100, et: 180,},
                {daysFromBirth: 3, pt: 130, et: 230,},
                {daysFromBirth: 4, pt: 130, et: 230,},
                {daysFromBirth: 5, pt: 130, et: 230,},
                {daysFromBirth: 6, pt: 130, et: 230,},
                {daysFromBirth: 7, pt: 130, et: 230,},
                {daysFromBirth: 8, pt: 130, et: 230,},
                {daysFromBirth: 9, pt: 130, et: 230,},
                {daysFromBirth: 10, pt: 130, et: 230,},
                {daysFromBirth: 11, pt: 130, et: 230,},
                {daysFromBirth: 12, pt: 130, et: 230,},
                {daysFromBirth: 13, pt: 130, et: 230,},
                {daysFromBirth: 14, pt: 130, et: 230,},
            ]
        },
    ];

    charts.map(chart => (
        console.log(chart)
    ))

    return(
        charts.map( chart => (
            <div key={chart.id}>
                <h3>{chart.title}</h3>
                <LineChart width={1000} height={400} data={chart.data}>
                    <Line type="monotone" dataKey="pt" stroke="blue" />
                    <Line type="monotone" dataKey="et" stroke="red" />
                    <Line type="monotone" dataKey="br" stroke="purple" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="daysFromBirth" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        ))
    );
}