import React from 'react';
import { useSelector } from 'react-redux';
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

export default function Graph({chart, billiAxis}){

    function handleDotMouseOver(){
        console.log('hoho')
        return(
            <Tooltip coordinate={billiAxis}/>
        )
    }

    const theme = useSelector(({theme}) => theme.value);

    return(
        <div style={{ width: '90%', height: 400}}>
            <h3 style={{textAlign: 'center', color: theme.text}}>{chart.title} de gestación</h3>
            <ResponsiveContainer>
                <LineChart 
                    data={chart.data} 
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                }}>
                    <Legend verticalAlign="top" height={36}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <Line name="Fototerapia" type="monotone" dataKey="pt" stroke="blue" />
                    <Line name="Exanguinotransfusión" type="monotone" dataKey="et" stroke="red" />
                    <Line name="Bilirrubina" stroke="purple" />
                    <ReferenceDot x={billiAxis.x} y={billiAxis.y} fill="purple" r={5} onMouseOver={handleDotMouseOver}/>
                    <XAxis dataKey="daysFromBirth" type="number" tickCount={15} interval={0} stroke={theme.textLight}/>
                    <YAxis domain={[0, dataMax => '550']} allowDataOverflow={true} type="number" tickCount={13} interval={0} stroke={theme.textLight}/>
                    <YAxis yAxisId="right" orientation="right" domain={[0, dataMax => '32.15']} allowDataOverflow={true} type="number" tickCount={13} interval={0} stroke={theme.textLight}/>
                    <Tooltip />
                    
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}