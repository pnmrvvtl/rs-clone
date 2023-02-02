import styles from './data-page.module.scss';
import React, {useState} from "react";
import ContinueButton from "../../components/data/continue-button";
import CheckableList from "../../components/data/checkable-list";
import RadioList from "../../components/data/radio-list";
import RadioSubList from "../../components/data/radio-sub-list";

export default function DataPage() {
    const [selectedSex, setSelectedSex] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(22);
    const [currentGoals, setCurrentGoals] = useState<string[]>([]);
    const [healthConditions, setHealthConditions] = useState<string[]>([]);
    const [foodAtTheMoment, setFoodAtTheMoment] = useState<string[]>([]);
    const [foodScenario, setFoodScenario] = useState<string[]>([]);
    const [foodCuisines, setFoodCuisines] = useState<string[]>([]);
    const [foodKinds, setFoodKinds] = useState<string[]>([]);
    const [foodAvoidProteins, setFoodAvoidProteins] = useState<string[]>([]);
    const [foodAvoidOthers, setFoodAvoidOthers] = useState<string[]>([]);
    const [foodBudget, setFoodBudget] = useState<string>('');
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
    const [pastPain, setPastPain] = useState('');
    const [foodCookTime, setFoodCookTime] = useState('');
    const [foodCookSkills, setFoodCookSkills] = useState('');
    const [foodCookCarb, setFoodCookCarb] = useState('');
    const [foodCookProtein, setFoodCookProtein] = useState('');

    const sexArr = ['Male', 'Female', 'Other'];
    const goalsArr = ['Lose weight so I can look and feel better',
        'Improve my overall health and prevent disease',
        'Manage cravings, hunger, or emotional eating',
        'Treat a specific health condition (such as type 2 diabetes, epilepsy, high blood pressure, PCOS, etc.)',
        'Get help with meal planning and cooking inspiration',
        'Find support from experts and others with similar experiences',
        'Learn about health and nutrition from the latest evidence-based science'
    ];
    const healthConditionsArr = [
        'Type 1 diabetes',
        'Type 2 diabetes',
        'High blood pressure'];
    const basicActArr = [['Less active', 'I exercise up to once per week'],
        ['Moderately active', 'I exercise 1 to 3 times per week'],
        ['Very active', 'I exercise 4 or more times per week']];
    const foodAtTheMomentArr = [
        'I have a lot of cravings', 'I eat when I’m stressed', 'I have a good relationship with food',
        'I eat when I’m bored', 'I try to make healthy choices but am unsure what’s best', 'I have an emotional attachment to certain foods'
    ];
    const foodScenarioArr = [
        'I lack support from family', 'I always gain the weight back', 'I don’t know what foods are best for me',
        'I get confused by conflicting nutrition advice', 'I get bored with a lack of variety', 'Special events and holidays are my downfall',
        'I make poor choices when I haven’t planned well'
    ];
    const pastPainArr = [
        'Feeling hungry too often', 'Cravings for carbs/sweets', 'The food wasn’t very good',
        'Options were too limited', 'I haven\'t dieted/I\'m not here to lose weight'
    ];
    const foodCuisinesArr = [
        'Indian', 'Asian', 'Mexican',
        'Italian', 'Middle Eastern', 'Mediterranean'
    ];
    const foodKindsArr = [
        'Salads', 'Casseroles', 'Soups & stews',
        'Grill', 'Pizza', 'Stir-fry', 'Omelette'
    ];
    const foodAvoidProteinsArr = [
        'Beef', 'Pork', 'Poultry', 'Lamb', 'Fish', 'Shellfish', 'Avoid all (vegetarian)'
    ];
    const foodAvoidOthersArr = [
        'Dairy', 'Eggs', 'Nuts'
    ];
    const foodBudgetArr = [
        ['Minimal', 'Show me budget-friendly options'],
        ['Average', 'Medium food budget'],
        ['Bigger', 'Fewer budget concerns']];
    const foodCookTimeArr = [
        ['Minimal', 'Up to 15 minutes per meal'],
        ['Average', 'Up to 45 minutes per meal'],
        ['Plenty', 'More than 45 minutes per meal'],
    ];
    const foodCookSkillsArr = [
        ['Beginner', 'I\'m still learning'],
        ['Average', 'I know my way around'],
        ['Pro', 'Prepare to be wowed'],
    ];
    const foodCookCarbArr = [
        ['Keto', 'Less than 20 grams of carbs per day'],
        ['Moderate', '20 to 50 grams of carbs per day'],
        ['Liberal', '50 to 100 grams of carbs per day'],
        ['I\'m not sure', 'Let us choose the best one for you'],
    ];
    const foodCookProteinArr = [
        ['I\'m not sure', 'Let us choose the best one for you'],
        ['Moderate', '90 to 120 grams per day'],
        ['High', 'More than 120 grams per day'],
    ]


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
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
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
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
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
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>
            <div className={`${styles.question} ${currentQuestion !== 5 && styles.hidden}`}>
                <h2>Diet Doctor creates sustainable results by helping you eat better, without restrictive dieting or
                    counting calories.</h2>
                <div className={styles['data-graph']}></div>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
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
                        <p className={styles['button-p-one']}>{el[0]}</p>
                        <p className={styles['button-p-two']}>{el[1]}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles.question} ${currentQuestion !== 7 && styles.hidden}`}>
                <h2>We know that changing how you eat can be hard</h2>
                <p>We simplify it for you, like we have for over 2,000,000 people.</p>
                <div className={styles['before-after']}>
                    <h4>Jane <b>lost 278 lbs</b></h4>
                    <p>“I no longer think of food as a comfort or an escape. I think of it as precious fuel for my body
                        and mind.”</p>
                </div>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 8 && styles.hidden}`}>
                <h2>Do you have any of these health conditions?</h2>
                {healthConditionsArr.map((el, index) => (
                    <div key={index} className={styles.goal} onClick={() => {
                        if (healthConditions.indexOf(el) !== -1) {
                            setHealthConditions([...healthConditions.filter((inEl) => inEl !== el)])
                        } else {
                            setHealthConditions([...healthConditions, el]);
                        }
                    }}>
                        <div className={`${styles.check} 
                        ${healthConditions.indexOf(el) !== -1 && styles.checked}`}
                        />
                        {el}
                    </div>
                ))}
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 9 && styles.hidden}`}>
                <h2>We help people with metabolic health issues</h2>
                <p>We’re experts at helping people with type 1 or type 2 diabetes, or who need assistance lowering blood
                    pressure.</p>
                <p>Our approach involves reducing carbohydrates which can cause complications when taking certain
                    medications. Therefore, we recommended checking in with a healthcare provider first.</p>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 10 && styles.hidden}`}>
                <div className={styles.midway}>
                    <p>🎉</p>
                    <h4>You are doing great!</h4>
                    <p>Time to talk about food</p>
                </div>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 11 && styles.hidden}`}>
                <h2>How do you feel about food at the moment?</h2>
                {foodAtTheMomentArr.map((el, index) => (
                    <div key={index} className={styles.goal} onClick={() => {
                        if (foodAtTheMoment.indexOf(el) !== -1) {
                            setFoodAtTheMoment([...foodAtTheMoment.filter((inEl) => inEl !== el)])
                        } else {
                            setFoodAtTheMoment([...foodAtTheMoment, el]);
                        }
                    }}>
                        <div className={`${styles.check} 
                        ${foodAtTheMoment.indexOf(el) !== -1 && styles.checked}`}
                        />
                        {el}
                    </div>
                ))}
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 12 && styles.hidden}`}>
                <h2>Which of these scenarios can you relate to?</h2>
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={foodScenarioArr} dispatchData={foodScenario} dispatcher={setFoodScenario}/>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 13 && styles.hidden}`}>
                <h2>If you’ve tried dieting in the past, what was your biggest pain point?</h2>
                <RadioList classButton={styles.button} classSelected={styles.selected} data={pastPainArr}
                           dispatchSelected={pastPain} dispatcher={setPastPain} dispatcherQuestion={setCurrentQuestion}
                           currentQuestion={currentQuestion}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 14 && styles.hidden}`}>
                <div className={styles.midway}>
                    <p>🎉</p>
                    <h4>Keep it up!</h4>
                    <p>You're just a few questions away from a delicious, personalized experience.</p>
                </div>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 15 && styles.hidden}`}>
                <h2>What cuisines make your mouth water?</h2>
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={foodCuisinesArr} dispatchData={foodCuisines} dispatcher={setFoodCuisines}/>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 16 && styles.hidden}`}>
                <h2>What kind of dishes do you like?</h2>
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={foodKindsArr} dispatchData={foodKinds} dispatcher={setFoodKinds}/>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 17 && styles.hidden}`}>
                <h2>Proteins to avoid?</h2>
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={foodAvoidProteinsArr} dispatchData={foodAvoidProteins}
                               dispatcher={setFoodAvoidProteins}/>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 18 && styles.hidden}`}>
                <h2>Other foods to avoid?</h2>
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={foodAvoidOthersArr} dispatchData={foodAvoidOthers}
                               dispatcher={setFoodAvoidOthers}/>
                <p>All of our recipes are gluten-free</p>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 19 && styles.hidden}`}>
                <h2>Our approach helps you feel fuller for longer</h2>
                <div className={styles['pizza-img']}></div>
                <p>You’ll enjoy delicious and satisfying food — so it doesn’t feel like a diet and is easier to stick
                    to.</p>
                <p>Our programs and recipes are developed by our registered dietitians and medical team.</p>
                <p>Establish healthy habits and learn what foods are best for you.</p>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 20 && styles.hidden}`}>
                <h2>What’s your food budget?</h2>
                {foodBudgetArr.map((el, index) => (
                    <div key={index} className={`${styles.button} ${foodBudget === el[0] && styles.selected}`}
                         onClick={() => {
                             setFoodBudget(el[0]);
                             setCurrentQuestion(currentQuestion + 1);
                         }}
                    >
                        <p className={styles['button-p-one']}>{el[0]}</p>
                        <p className={styles['button-p-two']}>{el[1]}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles.question} ${currentQuestion !== 21 && styles.hidden}`}>
                <h2>How much time do you have to cook?</h2>
                {foodCookTimeArr.map((el, index) => (
                    <div key={index} className={`${styles.button} ${foodCookTime === el[0] && styles.selected}`}
                         onClick={() => {
                             setFoodCookTime(el[0]);
                             setCurrentQuestion(currentQuestion + 1);
                         }}
                    >
                        <p className={styles['button-p-one']}>{el[0]}</p>
                        <p className={styles['button-p-two']}>{el[1]}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles.question} ${currentQuestion !== 22 && styles.hidden}`}>
                <h2>There is no one-size-fits-all diet. That’s why 90% of diets fail.</h2>
                <div className={`${styles['data-graph']} ${styles['data-graph2']}`}></div>
                <p>Our unique algorithm recommends recipes tailored to your preferences — and goals.</p>
                <p>Discover healthier options and foods you’ll love, while creating a sustainable lifestyle.</p>
                <ContinueButton classes={`${styles.button} ${styles.selected}`}
                                clickHandler={() => setCurrentQuestion(currentQuestion + 1)}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 23 && styles.hidden}`}>
                <h2>How are your cooking skills?</h2>
                {foodCookSkillsArr.map((el, index) => (
                    <div key={index} className={`${styles.button} ${foodCookSkills === el[0] && styles.selected}`}
                         onClick={() => {
                             setFoodCookSkills(el[0]);
                             setCurrentQuestion(currentQuestion + 1);
                         }}
                    >
                        <p className={styles['button-p-one']}>{el[0]}</p>
                        <p className={styles['button-p-two']}>{el[1]}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles.question} ${currentQuestion !== 24 && styles.hidden}`}>
                <h2>How low carb do you want to go?</h2>
                {foodCookCarbArr.map((el, index) => (
                    <div key={index} className={`${styles.button} ${foodCookCarb === el[0] && styles.selected}`}
                         onClick={() => {
                             setFoodCookCarb(el[0]);
                             setCurrentQuestion(currentQuestion + 1);
                         }}
                    >
                        <p className={styles['button-p-one']}>{el[0]}</p>
                        <p className={styles['button-p-two']}>{el[1]}</p>
                    </div>
                ))}
            </div>

            <div className={`${styles.question} ${currentQuestion !== 25 && styles.hidden}`}>
                <h2>What’s your protein target?</h2>
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']} data={foodCookProteinArr}
                              dispatchSelected={foodCookProtein} dispatcher={setFoodCookProtein} dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
            </div>

        </div>
    )
}