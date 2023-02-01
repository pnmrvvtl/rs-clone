import styles from './data-page.module.scss';
import React, {useState} from "react";

export default function DataPage() {
    const [selectedSex, setSelectedSex] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(6);
    const [currentGoals, setCurrentGoals] = useState<string[]>([]);
    const [currentCmHeight, setCmHeight] = useState('180');
    const [currentAge, setAge] = useState('20');
    const [currentFtHeight, setFtHeight] = useState('5');
    const [currentInHeight, setInHeight] = useState('5');
    const [currentLbsWight, setCurrentLbsWeight] = useState('180');
    const [goalLbsWeight, setGoalLbsWeight] = useState('155');
    const [currentKgWight, setCurrentKgWeight] = useState('100');
    const [goalKgWeight, setGoalKgWeight] = useState('70');
    const [heightSystem, setHeightSystem] = useState('cm');
    const [weightSystem, setWeightSystem] = useState('pounds');
    const [basicAct, setBasicAct] = useState('');

    const sexArr = ['Male', 'Female', 'Other'];
    const goalsArr = ['Lose weight so I can look and feel better',
        'Improve my overall health and prevent disease',
        'Manage cravings, hunger, or emotional eating',
        'Treat a specific health condition (such as type 2 diabetes, epilepsy, high blood pressure, PCOS, etc.)',
        'Get help with meal planning and cooking inspiration',
        'Find support from experts and others with similar experiences',
        'Learn about health and nutrition from the latest evidence-based science'
    ];
    const basicActArr = [['Less active','I exercise up to once per week'],
        ['Moderately active','I exercise 1 to 3 times per week'],
        ['Very active','I exercise 4 or more times per week']];


    const onNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if ((+target.value > +target.max)) {
            target.value = target.value.slice(0, target.value.length - 1);
            return;
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.progress}>
                <div className={`${styles.arrow} ${currentQuestion === 1 && styles.hidden}`}
                     onClick={() => currentQuestion > 1 && setCurrentQuestion(currentQuestion - 1)}></div>
                <div className={styles.bar}>
                    <div className={`${styles.inbar} ${styles[`mult${currentQuestion}`]}`}></div>
                </div>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 1 && styles.hidden}`}>
                <h2>What sex best describes you?</h2>
                {sexArr.map((el, index) => (
                    <div key={index} className={`${styles.button} ${selectedSex === el && styles.selected}`}
                         onClick={() => {
                             setSelectedSex(el);
                             setCurrentQuestion(currentQuestion + 1);
                         }}
                    >
                        {el}
                    </div>
                ))}
                <p>Your sex hormone levels, both currently and what they were during your adolescence, affect your
                    protein and energy needs.</p>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 2 && styles.hidden}`}>
                <h2>What are your main goals right now?</h2>
                {goalsArr.map((el, index) => (
                    <div key={index} className={styles.goal} onClick={() => {
                        if (currentGoals.indexOf(el) !== -1) {
                            setCurrentGoals([...currentGoals.filter((inEl) => inEl !== el)])
                        } else {
                            setCurrentGoals([...currentGoals, el]);
                        }
                    }}>
                        <div className={`${styles.check} 
                        ${currentGoals.indexOf(el) !== -1 && styles.checked}`}
                        />
                        {el}
                    </div>
                ))}
                <div className={`${styles.button} ${styles.selected}`}
                     onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                    Continue
                </div>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 3 && styles.hidden}`}>
                <h2>Age & height</h2>
                <p>Age</p>
                <input type="number" className={styles['input-age']}
                       max={150} min={0} value={currentAge} onChange={(event) => {
                    onNumberChange(event);
                    setAge(event.target.value);
                }}/>
                <p>Height</p>
                <div className={`${styles['ft-div']} ${heightSystem !== 'ft' && styles.hidden}`}>
                    <div>
                        <input type="number" min={0} max={20} value={currentFtHeight} onChange={(event) => {
                            onNumberChange(event);
                            setFtHeight(event.target.value)
                        }}/>
                        <span>ft.</span>
                    </div>
                    <div>
                        <input type="number" min={0} max={100} value={currentInHeight} onChange={(event) => {
                            onNumberChange(event);
                            setInHeight(event.target.value);
                        }}/>
                        <span>in.</span>
                    </div>
                </div>
                <div className={`${styles['cm-div']} ${heightSystem !== 'cm' && styles.hidden}`}>
                    <div><input type="number" min={0} max={280} value={currentCmHeight} onChange={(event) => {
                        onNumberChange(event);
                        setCmHeight(event.target.value);
                    }}/>
                        <span>cm.</span>
                    </div>
                </div>
                <div className={styles['height-system']}>
                    <div className={`${styles['height-system-ft']} ${heightSystem === 'ft' && styles.selected}`}
                         onClick={() => setHeightSystem('ft')}>
                        imperial
                    </div>
                    <div className={`${styles['height-system-cm']} ${heightSystem === 'cm' && styles.selected}`}
                         onClick={() => setHeightSystem('cm')}>
                        metric
                    </div>
                </div>
                <div className={`${styles.button} ${styles.selected}`}
                     onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                    Next
                </div>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 4 && styles.hidden}`}>
                <h2>What is your goal weight</h2>
                <div className={styles['weights-title']}>
                    <p>Current Weight</p>
                    <p>Goal Weight</p>
                </div>
                <div className={`${styles['pounds-div']} ${weightSystem !== 'pounds' && styles.hidden}`}>
                    <div>
                        <input type="number" min={0} max={500} value={currentLbsWight} onChange={(event) => {
                            onNumberChange(event);
                            setCurrentLbsWeight(event.target.value)
                        }}/>
                        <span>lbs</span>
                    </div>
                    <div>
                        <input type="number" min={0} max={500} value={goalLbsWeight} onChange={(event) => {
                            onNumberChange(event);
                            setGoalLbsWeight(event.target.value);
                        }}/>
                        <span>lbs</span>
                    </div>
                </div>

                <div className={`${styles['kilos-div']} ${weightSystem !== 'kilos' && styles.hidden}`}>
                    <div>
                        <input type="number" min={0} max={500} value={currentKgWight} onChange={(event) => {
                            onNumberChange(event);
                            setCurrentKgWeight(event.target.value)
                        }}/>
                        <span>kg</span>
                    </div>
                    <div>
                        <input type="number" min={0} max={500} value={goalKgWeight} onChange={(event) => {
                            onNumberChange(event);
                            setGoalKgWeight(event.target.value);
                        }}/>
                        <span>kg</span>
                    </div>
                </div>

                <div className={styles['height-system']}>
                    <div className={`${styles['height-system-ft']} ${weightSystem === 'pounds' && styles.selected}`}
                         onClick={() => setWeightSystem('pounds')}>
                        pounds
                    </div>
                    <div className={`${styles['height-system-cm']} ${weightSystem === 'kilos' && styles.selected}`}
                         onClick={() => setWeightSystem('kilos')}>
                        kilos
                    </div>
                </div>
                <div className={`${styles.button} ${styles.selected}`}
                     onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                    Next
                </div>
            </div>
            <div className={`${styles.question} ${currentQuestion !== 5 && styles.hidden}`}>
                <h2>Diet Doctor creates sustainable results by helping you eat better, without restrictive dieting or
                    counting calories.</h2>
                <div className={styles['data-graph']}></div>
                <div className={`${styles.button} ${styles.selected}`}
                     onClick={() => setCurrentQuestion(currentQuestion + 1)}>
                    Next
                </div>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 6 && styles.hidden}`}>
                <h2>How physically active are you?</h2>
                {basicActArr.map((el, index) => (
                    <div key={index} className={`${styles.button} ${basicAct === el[0] && styles.selected}`}
                         onClick={() => {
                             setBasicAct(el[0]);
                             setCurrentQuestion(currentQuestion + 1);
                         }}
                    >
                        <p>{el[0]}</p>
                        <p>{el[1]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}