import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.css'
import { useState } from 'react'

export const Footer = () => {
    const [refsOn, setRefOn] = useState('')
    const [socialOn, setSocialOn] = useState('')
    const [displayBlockRef, setDisplayBlockRef] = useState('')
    const [displayBlockSocial, setDisplayBlockSocial] = useState('')

    const showRef = () => {
        if(!refsOn){
            setDisplayBlockRef('block')
            setTimeout(() => {
                setRefOn(styles.refsOn)
            }, 1)
        } else {
            setRefOn('')
            setTimeout(() => {
                setDisplayBlockRef('none')
            }, 900)
        }
    }
    const showSocial = () => {
        if(!socialOn){
            setDisplayBlockSocial('block')
            setTimeout(() => {
                setSocialOn(styles.socialOn)
            }, 1)
        } else {
            setSocialOn('')
            setTimeout(() => {
                setDisplayBlockSocial('none')
            }, 1000)
            
        }
    }

    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.footerWrapper}>
            <header className={styles.header}>
              <p>
                Layout construído durante o curso de ReactJS pela{" "}
                <a href="https://b7web.com.br/fullstack/" target="_blank">
                  B7Web
                </a>
                . <br />
                Aprimorado e modificado por{" "}
                <a href="https://github.com/Vincent-Encanzo" target="_blank">
                  Vitor Costa
                </a>
                .
              </p>
            </header>

            <button className={styles.button} onClick={showSocial}>
              Redes <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <ul
              className={`${styles.socialOff} ${socialOn}`}
              style={{ display: displayBlockSocial }}
            >
              <li>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-vitor-costa-861283183/" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://github.com/Vincent-Encanzo" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="https://vincent-encanzo.github.io/portfolio/" target="_blank">Portfólio</a>
              </li>
            </ul>
            <button className={styles.button} onClick={showRef}>
              Referências <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <ul
              className={`${styles.refsOff} ${refsOn}`}
              style={{ display: displayBlockRef }}
            >
              <li>
                <a
                  href="https://www.saudenaosepesa.com.br/diagnostico.html?utm_source=g-search&utm_medium=cpc&utm_content=texto&utm_term=normal&utm_campaign=ogilvybr_novo-nordisk_always-on-performance_g-search_cliques_202205_texto_cpc_calcule-imc&gclid=CjwKCAiAjs2bBhACEiwALTBWZS4OqoRDqub3osH3fDP4Gik3aZJWEIMfZa7F7ElUFKF2Y1FllY1CWhoCNuUQAvD_BwE"
                  target="_blank"
                >
                  Como diagnosticar a obesidade
                </a>
              </li>
              <li>
                <a
                  href="https://www.plasticadosonho.com.br/blog/lipoaspiracao/peso-ideal/"
                  target="_blank"
                >
                  Primeiro Passo para Uma Vida Inteira de Novas Conquistas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}