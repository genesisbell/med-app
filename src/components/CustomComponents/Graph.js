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

export default function Graph({chart, billiAxis, info}){

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
            {
                info.billi && (
                    <div style={{marginTop: 10, marginBottom: 10}}>
                        <h4 style={{textAlign: 'center', color: theme.text}}>Días: {billiAxis.x.toFixed(2)}</h4>
                        <h4 style={{textAlign: 'center', color: 'purple'}}>Billirubinemia: {info.billi}</h4>
                        {
                            info.graphValue && (
                                <div>
                                    <h4 style={{textAlign: 'center', color: 'blue'}}>Fototerapia: {info.graphValue.pt}</h4>
                                    <h4 style={{textAlign: 'center', color: 'red'}}>Exanguinotransfusión: {info.graphValue.et}</h4>
                                </div>
                            )
                        }
                        {
                            info.range && (
                                <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
                                    <div style={{width: '50%'}}>
                                        <div>
                                            <h4 style={{textAlign: 'center', color: theme.text}}>Entre día {info.range.lowerRange.daysFromBirth}</h4>
                                        </div>
                                        <div>
                                            <h4 style={{textAlign: 'center', color: 'blue'}}>Fototerapia: {info.range.lowerRange.pt}</h4>
                                            <h4 style={{textAlign: 'center', color: 'red'}}>Exanguinotransfusión: {info.range.lowerRange.et}</h4>
                                        </div>
                                    </div>
                                    <div style={{width: '50%'}}>
                                        <div>
                                            <h4 style={{textAlign: 'center', color: theme.text}}>y día {info.range.upperRange.daysFromBirth}</h4>
                                        </div>
                                        <div>
                                            <h4 style={{textAlign: 'center', color: 'blue'}}>Fototerapia: {info.range.upperRange.pt}</h4>
                                            <h4 style={{textAlign: 'center', color: 'red'}}>Exanguinotransfusión: {info.range.upperRange.et}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                )
            }
            <ResponsiveContainer>
                <LineChart 
                    data={chart.data} 
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                }}>
                    <Legend verticalAlign="top" height={'20%'}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <Line name="Fototerapia" type="monotone" dataKey="pt" stroke="blue" />
                    <Line name="Exanguinotransfusión" type="monotone" dataKey="et" stroke="red" />
                    <Line name="Bilirrubina" stroke="purple" />
                    <ReferenceDot x={billiAxis.x} y={billiAxis.y} fill="purple" r={5} onMouseOver={handleDotMouseOver}/>
                    <XAxis dataKey="daysFromBirth" type="number" tickCount={15} interval={0} stroke={theme.textLight}/>
                    <YAxis domain={[0, dataMax => '550']} allowDataOverflow={true} type="number" tickCount={13} interval={0} stroke={theme.textLight}/>
                    <YAxis yAxisId="right" orientation="right" domain={[0, dataMax => '32.15']} allowDataOverflow={true} type="number" tickCount={13} interval={0} stroke={theme.textLight}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}