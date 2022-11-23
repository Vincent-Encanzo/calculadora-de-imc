import { Level } from '../../helpers/imc';
import styles from './GridItem.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react';

type Props = {
    item: Level,
    children?: ReactNode
}
export const GridItem = ({children, item}: Props) => {

    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                {item.icon === 'up' && <FontAwesomeIcon icon={faThumbsUp} />}
                {item.icon === 'down' && <FontAwesomeIcon icon={faThumbsDown} />}
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourIMC &&
                <div className={styles.yourIMC}>
                    Seu IMC é de {item.yourIMC} kg/m²
                </div>
            }
            <div className={styles.gridDesc}>
                {item.imc[0] >= 40 &&
                    <>
                        IMC acima de <strong>40</strong>
                    </>
                }
                {item.imc[0] < 40 &&
                    <>
                        IMC entre <strong>{item.imc[0]}</strong> ~ <strong>{item.imc[1]}</strong>
                    </>
                }
            </div>
            <div className={styles.text}>
                {children}
            </div>
        </div>
    );
}