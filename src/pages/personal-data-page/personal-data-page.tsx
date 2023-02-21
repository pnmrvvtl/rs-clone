//libs
import React, { useContext } from 'react';
//styles
import styles from './personal-data-page.module.scss';
import { UserContext } from '../../context/user-context';


const PersonalDataPage = () => {
  const { userData, user } = useContext(UserContext);

  return (
    <div className={styles.container}>
      <h1>{user.email}</h1>
      <ol>
        {Object.entries(userData).map(el => {
          if (typeof el[1] !== 'boolean') {
            if ((Array.isArray(el[1]) && el[1].length) || typeof el[1] === 'string' || typeof el[1] === 'number')
              return (
                <li>
                  {el[0].split(/(?=[A-Z])/).join(' ').toUpperCase()}:{' '}{Array.isArray(el[1]) ? el[1].join(', ') : el[1]}
                </li>);
          }
        })}
      </ol>
    </div>
  );
};

export default PersonalDataPage;