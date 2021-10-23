import React, {
    useContext,
    useState,
} from 'react';

//Custom Components
import Graph from '../CustomComponents/Graph';
import Button from '../CustomComponents/BasicComponents/Button';

//Data Libraries
import billiGraphs from '../../DataLibraries/billiGraphs';

//Context
import { ThemeContext } from '../Context';

//Styles
import './BilliPage.css'

export default function BilliPage(){

    const { theme } = useContext(ThemeContext);

    const currentDate = new Date();
    const day = currentDate.getDate() < 10 ? `0${currentDate.getDate()}` : currentDate.getDate();
    const month = currentDate.getMonth()+1 < 10 ? `0${currentDate.getMonth()+1}` : currentDate.getMonth()+1;
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours();
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes();

    const [data, setData] = useState({
        billi: "",
        dateBirth: `${year}-${month}-${day}`,
        timeBirth: `${hours}:${minutes}`,
        dateLab: `${year}-${month}-${day}`,
        timeLab: `${hours}:${minutes}`,
    });
    const [graphData, setGraphData] = useState(billiGraphs[0]);
    const [billiAxis, setBilliAxis] = useState({
        x:0,
        y:0,
    })

    function handleChange(event){
        const {name, value} = event.target;

        setData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    function selectWeek(event){
        const selectedId = event.target.value;
        const foundGraph = billiGraphs.find(billiGraph => billiGraph.id === parseInt(selectedId));
        setGraphData(foundGraph);
    }

    function handleSubmit(event){
        event.preventDefault();
        const {billi, dateBirth, timeBirth, dateLab, timeLab} = event.target;

        const bornDate = new Date(`${dateBirth.value} ${timeBirth.value}`);
        const labDate = new Date(`${dateLab.value} ${timeLab.value}`);

        const timeFromBirth = labDate.getTime() - bornDate.getTime();
        const minutesFromBirth = timeFromBirth / (1000 * 60)

        //1440 minutes in a day
        const x = minutesFromBirth / 1440


        setBilliAxis({
            x,
            y: billi.value
        })
    }

    return(
        <div>
            <form className="formBilli" onSubmit={handleSubmit}>
                <div className="formItem">
                    <label style={{color: theme.text}}>Semanas de gestación: </label>
                    <div className="select">
                        <select name="select" onChange={selectWeek}>
                        {
                            billiGraphs.map(chart => (
                                <option key={chart.id} value={chart.id}>{chart.title}</option>
                            ))
                        }
                        </select>
                    </div>
                </div>
                <br/>
                <div className="formItem">
                    <label style={{color: theme.text}}>Bilirubina: </label>
                    <input 
                        id="bili"
                        type="number" 
                        name="billi" 
                        placeholder="Billi" 
                        value={data.billi}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div className="formItem">
                    <label style={{color: theme.text}}>Fecha Nacimiento: </label>
                    <input 
                        id="dateBirth"
                        type="date"
                        name="dateBirth"
                        value={data.dateBirth}
                        onChange={handleChange}
                    />
                    <input 
                        id="timeBirth" 
                        type="time" 
                        name="timeBirth" 
                        value={data.timeBirth}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <div className="formItem">
                    <label style={{color: theme.text}}>Fecha Laboratorio: </label>
                    <input 
                        id="dateLab"
                        type="date"
                        name="dateLab"
                        value={data.dateLab}
                        onChange={handleChange}
                    />
                    <input 
                        id="timeLab" 
                        type="time" 
                        name="timeLab" 
                        value={data.timeLab}
                        onChange={handleChange}
                    />
                </div>
                <br/>
                <Button title={"Calcular"}/>
            </form>

            <div style={{display:'flex', justifyContent:'center', width: '100%'}}>
                <Graph chart={graphData} billiAxis={billiAxis}/>
            </div>

        </div>
    );
}