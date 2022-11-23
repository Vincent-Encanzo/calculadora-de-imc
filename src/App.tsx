import { useState } from 'react';
import styles from './App.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChildren, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { GridItem } from './components/GridItem';
import { Footer } from './components/Footer';
import { Level } from './helpers/imc'


import { levels, imcCalc} from './helpers/imc'


function App() {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [showItem, setShowItem] = useState<Level | null>(null);
  const [opacityOn, setOpacityOn] = useState<number>(0);
  const [opacityOff, setOpacityOff] = useState<number>(1);
  const [showUpClass, setShowUp] = useState<string>('');


  
  const calcButton = () => {
    if(weightField && heightField > 0){
      setShowItem(imcCalc(heightField, weightField));
      setOpacityOff(0);

      setTimeout(() => {
        setOpacityOff(1);
        setOpacityOn(1);
        setShowUp(styles.rightSideMotion);
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 10)
      document.body.style.overflow = 'hidden';
    } else {
      alert('Complete todos os campos, por favor!')
    }
  }

  const backButton = () => {

    setOpacityOn(0);
    setOpacityOff(0);
    setShowUp('');
    document.body.style.overflow = 'visible';

    setTimeout(() => {
      setOpacityOff(1)
      setShowItem(null);
      setHeightField(0);
      setWeightField(0);
    }, 500)
  }

  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <div className={styles.icon}>
              <FontAwesomeIcon icon={faChildren} />
              <p>Calculadora de IMC</p>
          </div>
        </div>
      </header>
        <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu IMC agora mesmo!</h1>
            <p>O IMC (Índice de Massa Corporal) é um cálculo universal adotado pela OMS (Organização Mundial da Saúde) para classificar padrões de saúde relacionados ao peso, como desnutrição e obesidade.</p>

            <input
              type="number"
              placeholder='Digite sua altura. Ex: 1.72 (em metros)'
              value={heightField > 0 ? heightField : ''}
              onChange={(e) => {setHeightField(parseFloat(e.target.value))}}
              disabled={showItem ? true : false}
            />

            <input
              type="number"
              placeholder='Digite seu peso. Ex: 80.8 (em kg)'
              value={weightField > 0 ? weightField : ''}
              onChange={(e) => {setWeightField(parseFloat(e.target.value))}}
              disabled={showItem ? true : false}
            />

            <button  onClick={calcButton} disabled={showItem ? true : false} >Calcular</button>
          </div>
            <div className={`${styles.rightSide} ${showUpClass}`} style={{opacity: opacityOff}}>
              {!showItem && 
                <div className={styles.grid}>
                  {levels.map((item, key) => (
                    <GridItem key={key} item={item}/>
                  ))}
                </div>
              }
              {showItem &&
              <div className={styles.result} style={{opacity: opacityOn}}>
                <div className={styles.backArrow} onClick={backButton}>
                  <FontAwesomeIcon icon={faCircleArrowLeft} />
                </div>
                <GridItem item={showItem}>
                  <>
                    {showItem.teste}
                  </>
                </GridItem>
              </div>
              }
            </div>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
