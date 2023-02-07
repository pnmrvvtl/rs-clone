import styles from './data-page.module.scss';
import React, {useContext, useEffect, useState} from "react";
import ContinueButton from "../../components/data/continue-button";
import CheckableList from "../../components/data/checkable-list";
import RadioList from "../../components/data/radio-list";
import RadioSubList from "../../components/data/radio-sub-list";
import {UserData} from "../../types/user-data";
import {UserContext} from "../../context/user-context";
import {useNavigate} from "react-router-dom";
import MealsApi from "../../api/meals-api";

export default function DataPage() {
    const {setUserData, setMealsByParametersResponse} = useContext(UserContext);
    const navigate = useNavigate();

    const [selectedSex, setSelectedSex] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(28);
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
    const [currentLbsWeight, setCurrentLbsWeight] = useState('180');
    const [goalLbsWeight, setGoalLbsWeight] = useState('155');
    const [currentKgWeight, setCurrentKgWeight] = useState('100');
    const [goalKgWeight, setGoalKgWeight] = useState('70');
    const [heightSystem, setHeightSystem] = useState('cm');
    const [weightSystem, setWeightSystem] = useState('kilos');
    const [basicActivities, setBasicAct] = useState('');
    const [pastPains, setPastPain] = useState('');
    const [foodCookTime, setFoodCookTime] = useState('');
    const [foodCookSkills, setFoodCookSkills] = useState('');
    const [foodCookCarb, setFoodCookCarb] = useState('');
    const [foodCookProtein, setFoodCookProtein] = useState('');
    const [mealsCount, setMealsCount] = useState('');
    const [lunchLeftovers, setLunchLeftovers] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [currentQuestion]);

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
    ];
    const mealsCountArr = [
        ['2', 'Breakfast, lunch, and dinner'],
        ['3', 'Lunch and dinner (intermittent fasting)'],
    ];
    const lunchLeftoversArr = [
        ['Yes', 'I want to save some time'],
        ['No', 'I really like variation'],
    ];


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
                <RadioList classButton={styles.button} classSelected={styles.selected} data={sexArr}
                           dispatchSelected={selectedSex} dispatcher={setSelectedSex}
                           dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
                <p>Your sex hormone levels, both currently and what they were during your adolescence, affect your
                    protein and energy needs.</p>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 2 && styles.hidden}`}>
                <h2>What are your main goals right now?</h2>
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={goalsArr} dispatchData={currentGoals} dispatcher={setCurrentGoals}/>
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
                        <input type="number" min={0} max={500} value={currentLbsWeight} onChange={(event) => {
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
                        <input type="number" min={0} max={500} value={currentKgWeight} onChange={(event) => {
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
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']}
                              data={basicActArr} dispatchSelected={basicActivities} dispatcher={setBasicAct}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
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
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={healthConditionsArr} dispatchData={healthConditions}
                               dispatcher={setHealthConditions}/>
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
                <CheckableList classElem={styles.goal} classCheck={styles.check} classChecked={styles.checked}
                               data={foodAtTheMomentArr} dispatchData={foodAtTheMoment}
                               dispatcher={setFoodAtTheMoment}/>
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
                           dispatchSelected={pastPains} dispatcher={setPastPain} dispatcherQuestion={setCurrentQuestion}
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
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']}
                              data={foodBudgetArr} dispatchSelected={foodBudget} dispatcher={setFoodBudget}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 21 && styles.hidden}`}>
                <h2>How much time do you have to cook?</h2>
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']}
                              data={foodCookTimeArr} dispatchSelected={foodCookTime} dispatcher={setFoodCookTime}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
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
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']}
                              data={foodCookCarbArr} dispatchSelected={foodCookCarb} dispatcher={setFoodCookCarb}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 25 && styles.hidden}`}>
                <h2>What’s your protein target?</h2>
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']}
                              data={foodCookProteinArr}
                              dispatchSelected={foodCookProtein} dispatcher={setFoodCookProtein}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 26 && styles.hidden}`}>
                <h2>How many meals per day?</h2>
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']} data={mealsCountArr}
                              dispatchSelected={mealsCount} dispatcher={setMealsCount}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 27 && styles.hidden}`}>
                <h2>Leftovers for lunch?</h2>
                <RadioSubList classButton={styles.button} classSelected={styles.selected}
                              classPOne={styles['button-p-one']} classPTwo={styles['button-p-two']}
                              data={lunchLeftoversArr} dispatchSelected={lunchLeftovers} dispatcher={setLunchLeftovers}
                              dispatcherQuestion={setCurrentQuestion} currentQuestion={currentQuestion}/>
            </div>


            <div className={`${styles.question} ${currentQuestion !== 28 && styles.hidden}`}>
                <h2>Developed by leading nutrition experts</h2>
                <div className={styles.experts}>
                    <div>Andreas Eenfeldt, MD</div>
                    <div>Bret Scher, MD</div>
                    <div>Franziska Spritzler, RD</div>
                </div>
                <p>We provide unbiased guidance rooted in evidence-based information, nutritionally-reviewed recipes
                    that satisfy, and inspiring tools to help you reach your goals in a sustainable way.</p>
                <div className={`${styles.button} ${styles.selected}`}
                     onClick={async () => {
                         const KG_IN_LBS = 0.453592;
                         const CM_IN_FOOT = 30.48;
                         const CM_IN_INCH = 2.54;
                         const userData: UserData = {
                             isEditedByUser: true,
                             cmHeight: heightSystem === 'cm' ?
                                 +currentCmHeight : (+currentFtHeight * CM_IN_FOOT + +currentInHeight * CM_IN_INCH),
                             currentKgWeight: weightSystem === 'kilos' ?
                                 +currentKgWeight : +currentLbsWeight * KG_IN_LBS,
                             goalKgWeight: weightSystem === 'kilos' ?
                                 +goalKgWeight : +goalLbsWeight * KG_IN_LBS,
                             selectedSex,
                             currentGoals,
                             healthConditions,
                             foodAtTheMoment,
                             foodScenario,
                             foodCuisines,
                             foodKinds,
                             foodAvoidProteins,
                             foodAvoidOthers,
                             foodBudget,
                             basicActivities,
                             pastPains,
                             foodCookTime,
                             foodCookSkills,
                             foodCookCarb,
                             foodCookProtein,
                             mealsCount: +mealsCount,
                             lunchLeftovers,
                         }
                         setUserData(userData);
                         setIsLoading(true);
                         window.scrollTo(0, 0);
                         const meals = await new MealsApi().getMealsByParameters({
                             query: 'a',
                             cuisine: 'italian',
                             excludeCuisine: 'greek',
                             diet: 'vegetarian',
                             intolerances: 'gluten',
                             equipment: '',
                             includeIngredients: '',
                             excludeIngredients: '',
                             type: '',
                             instructionsRequired: true,
                             fillIngredients: false,
                             addRecipeNutrition: true,
                             addRecipeInformation: true,
                             titleMatch: '',
                             maxReadyTime: 20,
                             ignorePantry: true,
                             sort: '',
                             sortDirection: '',
                             minCarbs: 10,
                             maxCarbs: 100,
                             minProtein: 10,
                             maxProtein: 100,
                             minCalories: 50,
                             maxCalories: 800,
                             minFat: 10,
                             maxFat: 100,
                             minAlcohol: 0,
                             maxAlcohol: 100,
                             minCaffeine: 0,
                             maxCaffeine: 100,
                             minCopper: 0,
                             maxCopper: 100,
                             minCalcium: 0,
                             maxCalcium: 100,
                             minCholine: 0,
                             maxCholine: 100,
                             minCholesterol: 0,
                             maxCholesterol: 100,
                             minFluoride: 0,
                             maxFluoride: 100,
                             minSaturatedFat: 0,
                             maxSaturatedFat: 100,
                             minVitaminA: 0,
                             maxVitaminA: 100,
                             minVitaminC: 0,
                             maxVitaminC: 100,
                             minVitaminD: 0,
                             maxVitaminD: 100,
                             minVitaminE: 0,
                             maxVitaminE: 100,
                             minVitaminK: 0,
                             maxVitaminK: 100,
                             minVitaminB1: 0,
                             maxVitaminB1: 100,
                             minVitaminB2: 0,
                             maxVitaminB2: 100,
                             minVitaminB5: 0,
                             maxVitaminB5: 100,
                             minVitaminB3: 0,
                             maxVitaminB3: 100,
                             minVitaminB6: 0,
                             maxVitaminB6: 100,
                             minVitaminB12: 0,
                             maxVitaminB12: 100,
                             minFiber: 0,
                             maxFiber: 100,
                             minFolate: 0,
                             maxFolate: 100,
                             minFolicAcid: 0,
                             maxFolicAcid: 100,
                             minIodine: 0,
                             maxIodine: 100,
                             minIron: 0,
                             maxIron: 100,
                             minMagnesium: 0,
                             maxMagnesium: 100,
                             minManganese: 0,
                             maxManganese: 100,
                             minPhosphorus: 0,
                             maxPhosphorus: 100,
                             minPotassium: 0,
                             maxPotassium: 100,
                             minSelenium: 0,
                             maxSelenium: 100,
                             minSodium: 0,
                             maxSodium: 100,
                             minSugar: 0,
                             maxSugar: 100,
                             minZinc: 0,
                             maxZinc: 100,
                             offset: 0,
                             number: 10,
                             limitLicense: false,
                             ranking: 2
                         });
                         console.log(meals)
                         setMealsByParametersResponse(meals);
                         setIsLoading(false);
                         setCurrentQuestion(1);
                         navigate('/meals-plan');
                     }}>
                    Generate my meal plan
                </div>
            </div>

            {isLoading && <div className={styles.loading}>
                <p>Please wait, we are calculating your fitness data...</p>
                <span><i></i><i></i></span>
            </div>}
        </div>
    )
}