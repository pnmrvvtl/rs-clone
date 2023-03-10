import React, { useContext } from 'react'
import styles from '../../pages/results-page/results-page.module.scss'
import { BMI, IdealWeight, Macros, Calory, CaloryWeight, CaloryGoals } from "../../types/fitness-api-types";
import { UserContext } from "../../context/user-context";
import { UserData } from '../../types/user-data';
import { calculateGoal } from '../../helpers/calculateGoal';

export default function BMI(props: { calories: Calory, macros: Macros, bmi: BMI, idealWeight: IdealWeight }) {
  const { userData } = useContext(UserContext);
  const { bmi, macros, idealWeight, calories } = props;

  const goalData = calculateGoal(userData.currentKgWeight, userData.goalKgWeight, userData.weightProgramm)
  console.log(goalData)
  const weightResponseValues = Object.values(idealWeight)
  const sumValues = weightResponseValues.reduce((sum, value) => sum + value, 0)
  const averageWeight = Math.ceil(sumValues / weightResponseValues.length)

  const goalResponse = calories.goals
  const goalPrograms: Record<string, string> = {
    'extremelose': 'Extreme weight loss',
    'extremegain': 'Extreme weight gain',
    'weightlose': 'Weight loss',
    'weightgain': 'Weight gain',
    'mildlose': 'Mild weight loss',
    'mildgain': 'Mild weight gain'
  }

  const goal = goalPrograms[`${goalData.program}${goalData.goal}`] || 'weightlose';
  const calory = goalResponse[goal as keyof CaloryGoals || 'Weight loss'] as CaloryWeight || {calory: 1800};
console.log(goalData.program , goalData.goal)
  return (
    <section className={styles["bmi-results"]}>
      <div className={styles.title}>Current weight:
        <span className={styles.value}> {userData.currentKgWeight} kg</span>
      </div>
      <div className={styles.title}>Your BMI:
        <span className={styles.value}> {bmi.bmi}</span>
      </div>
      <div className={styles.title}>Your goal:
        <span className={styles.value}> {userData.goalKgWeight} kg</span>
      </div>
      <div className={styles.title}>Food program:
        <span className={styles.value}> {`${goalData.program || ''} ${goalData.goal || 'maintain weight'}`}</span>
      </div>
      <p className={styles.text}>{`You will achieve your goal for ${goalData.duration || 12 } weeks`}</p>
      <div className={styles.title}>Daily caloric:
        <span className={styles.value}> {Math.ceil(calory.calory || macros.calorie)}</span>
      </div>
      <div className={styles.title}>Ideal weight:
        <span className={styles.value}> {averageWeight} kg <span className={styles.recommended}>(recommended)</span></span>
      </div>
    </section>
  )

}