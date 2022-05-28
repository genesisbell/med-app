import React, {
    useState,
} from 'react';
import { useSelector } from 'react-redux';

//Modules Components
import Header from '../Modules/Header';

//Custom Components
import Graph from '../CustomComponents/Graph';
import Button from '../CustomComponents/BasicComponents/Button';

//Data Libraries
import billiGraphs from '../../DataLibraries/billiGraphs';

//Styles
import './BilliPage.css'

export default function BilliPage(){

    const theme = useSelector(({theme}) => theme.value);

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
        const {billi, dateBirth, timeBirth, dateLab, timeLab, unidad_medida} = event.target;

        const bornDate = new Date(`${dateBirth.value} ${timeBirth.value}`);
        const labDate = new Date(`${dateLab.value} ${timeLab.value}`);

        const isRangeTimeValid = labDate.getTime() >= bornDate.getTime() ? true : false;

        if(!isRangeTimeValid){
            alert('La fecha de nacimiento no debe ser mayor a la fecha de laboratorio');
            setData(prevValue => ({
                ...prevValue,
                dateBirth: `${year}-${month}-${day}`,
                timeBirth: `${hours}:${minutes}`,
                dateLab: `${year}-${month}-${day}`,
                timeLab: `${hours}:${minutes}`,
            }))
        }

        const timeFromBirth = labDate.getTime() - bornDate.getTime();
        const minutesFromBirth = timeFromBirth / (1000 * 60);

        //1440 minutes in a day
        const x = minutesFromBirth / 1440;
        const y = unidad_medida.value === 'mg/dL' ? billi.value * 17.104 : billi.value;


        setBilliAxis({
            x,
            y
        })
    }

    //micromoles por litro a miligramos por decilitro
    //mol por litro / 17.104 = mg/dl

    const styles={
        input: {
            backgroundColor: theme.inputBackgroundColor,
            color: theme.text, 
            borderColor: theme.borderColor,
        }
    }

    return(
        <div>
            <Header title='Calculadora Hiperbilirrubinemia'/>
            <form className="formBilli" onSubmit={handleSubmit}>
                <div className="formItem">
                    <label style={{color: theme.text , alignSelf: 'center'}}>Semanas de gestación: </label>
                    <select name="select" onChange={selectWeek} style={styles.input}>
                    {
                        billiGraphs.map(chart => (
                            <option key={chart.id} value={chart.id}>{chart.title}</option>
                        ))
                    }
                    </select>
                </div>
                <br/>
                <div className="formItem">
                    <label style={{color: theme.text, alignSelf: 'center'}}>Bilirrubina: </label>
                    <input 
                        id="bili"
                        type="number" 
                        name="billi" 
                        style={styles.input}
                        placeholder="Bilirrubina" 
                        value={data.billi}
                        onChange={handleChange}
                    />
                </div>
                <div className="formItem">
                    <label style={{color: theme.text}}>Tipo de medición:</label>
                    <div className="radioButtons">
                        <div style={{display: 'flex', alignItems:'center', justifyContent: 'start'}}>
                            <input type="radio" id="moles" name="unidad_medida" value="µmol/L"/>
                            <label htmlFor="moles" style={{color: theme.text}}>µmol/L</label>
                        </div>
                        <div style={{display: 'flex', alignItems:'center', justifyContent: 'start'}}>
                            <input type="radio" id="miligramos" name="unidad_medida" value="mg/dL" defaultChecked/>
                            <label htmlFor="miligramos" style={{color: theme.text}}>mg/dL</label>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="formItem">
                    <label style={{color: theme.text, alignSelf: 'center'}}>Fecha Nacimiento: </label>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input 
                            id="dateBirth"
                            type="date"
                            name="dateBirth"
                            style={styles.input}
                            value={data.dateBirth}
                            onChange={handleChange}
                        />
                        <input 
                            id="timeBirth" 
                            type="time" 
                            name="timeBirth"
                            style={styles.input} 
                            value={data.timeBirth}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <br/>
                <div className="formItem">
                    <label style={{color: theme.text, alignSelf: 'center'}}>Fecha Laboratorio: </label>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <input 
                            id="dateLab"
                            type="date"
                            name="dateLab"
                            style={styles.input}
                            value={data.dateLab}
                            onChange={handleChange}
                        />
                        <input 
                            id="timeLab" 
                            type="time" 
                            name="timeLab" 
                            style={styles.input}
                            value={data.timeLab}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <br/>
                <Button title="Calcular"/>
            </form>

            <div style={{display:'flex', justifyContent:'center', width: '100%'}}>
                <Graph chart={graphData} billiAxis={billiAxis}/>
            </div>

        </div>
    );
}