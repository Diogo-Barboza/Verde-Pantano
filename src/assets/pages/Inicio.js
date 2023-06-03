import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react'

import styles from './Inicio.module.css'

import {motion} from 'framer-motion'

import image1 from '../img/foto-carrosel-1.jpg'
import image2 from '../img/foto-carrosel-2.jpg'
import image3 from '../img/foto-carrosel-3.jpg'
import image4 from '../img/foto-carrosel-4.jpg'
import image5 from '../img/foto-carrosel-5.jpg'
import LinkButtom from '../components/LinkButtom'

const images = [image1, image2, image3, image4, image5]

function Inicio(){
    const carrosel = useRef();
    const [width, setWidth] = useState(0)

    useEffect(() => {
        console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
        setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
    }, [])


    return (
        <section className={styles.inicio_container}>
            <h1>Bem vindo ao <span>PC Wizard!</span></h1>
            <p>Descubra o pc para rodar o jogo dos seus sonhos!</p>
            <motion.div ref={carrosel} className={styles.carrosel} whileTap={{cursor: "grabbing"}}>
                <motion.div className={styles.inner} drag="x" dragConstraints={{right: 0, left: -width}} initial={{ x: 100}} animate={{ x: 0}} transition={{ duration: 0.8}}>

                    {images.map(images => (
                        <motion.div  className={styles.item} key={images}>
                            <img src={images} alt="Imagens Carrosel"/>
                        </motion.div>
                    ))}

                </motion.div>
            </motion.div>
            <LinkButtom to="/start" text="COMEÇAR"/>
        </section>
    )
}

export default Inicio
