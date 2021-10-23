import React, {
    useContext,
} from 'react';
import { 
    CartesianGrid,
    Legend,
    LineChart, 
    Line,
    ReferenceDot,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

//Context
import {ThemeContext} from '../Context';

export default function Graph({chart, billiAxis}){

    function handleDotMouseOver(){
        console.log('hoho')
        return(
            <Tooltip coordinate={billiAxis}/>
        )
    }

    const { theme } = useContext(ThemeContext);

    return(
        <div style={{ width: '90%', height: 400}}>
            <h3 style={{textAlign: 'center', color: theme.text}}>{chart.title} de gestación</h3>
            <ResponsiveContainer>
                <LineChart 
                    data={chart.data} 
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                }}>
                    <Legend verticalAlign="top" height={36}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <Line name="Fototerapia" type="monotone" dataKey="pt" stroke="blue" />
                    <Line name="Exanguinotransfusión" type="monotone" dataKey="et" stroke="red" />
                    <Line name="Bilirubina" stroke="purple" />
                    <ReferenceDot x={billiAxis.x} y={billiAxis.y} fill="purple" r={5} onMouseOver={handleDotMouseOver}/>
                    <XAxis dataKey="daysFromBirth" type="number" tickCount={15} interval={0} stroke={theme.textLight}/>
                    <YAxis allowDataOverflow={true} type="number" tickCount={15} interval={0} stroke={theme.textLight}/>
                    <Tooltip />
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}