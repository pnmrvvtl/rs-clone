import styles from './data-page.module.scss';
import {useState} from "react";

export default function DataPage() {
    const [selectedSex, setSelectedSex] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [currentGoals, setCurrentGoals] = useState<string[]>([]);
    const sexArr = ['Male', 'Female', 'Other'];
    const goalsArr = ['Lose weight so I can look and feel better',
        'Improve my overall health and prevent disease',
        'Manage cravings, hunger, or emotional eating',
        'Treat a specific health condition (such as type 2 diabetes, epilepsy, high blood pressure, PCOS, etc.)',
        'Get help with meal planning and cooking inspiration',
        'Find support from experts and others with similar experiences',
        'Learn about health and nutrition from the latest evidence-based science'
    ];

    return (
        <div className={styles.container}>
            <div className={styles.progress}>
                <div className={styles.arrow}
                     onClick={() => currentQuestion > 1 && setCurrentQuestion(currentQuestion - 1)}></div>
                <div className={styles.bar}>
                    <div className={`${styles.inbar} ${styles[`mult${currentQuestion}`]}`}></div>
                </div>
            </div>

            <div className={`${styles.question} ${currentQuestion !== 1 && styles.hidden}`}>
                <h2>What sex best describes you?</h2>
                {sexArr.map((el) => (
                    <div className={`${styles.button} ${selectedSex === el && styles.selected}`}
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
                <h2>What are your main goals right now</h2>
                {goalsArr.map((el) => (
                    <div className={styles.goal} onClick={() => {
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
        </div>
    )
}