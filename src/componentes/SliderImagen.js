import React, { Fragment } from 'react';
import { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { useController } from 'react-scroll-parallax';

import { Parallax } from 'react-scroll-parallax';
import '../css/Image.scss';
import '../css/prueba.css';
import ParallaxCache from './ParallaxCache';

//import "../css/tarjetas.css";
import ReactDOM from 'react-dom';

import styles from '../css/prueba.css';
import style from '../css/Marquee.scss';
import Svgani from './Svgani';

//import boxBg from '../imagenes/box-bg.svg';
//import boxOutline from '../imagenes/box-outline.svg';
//import divider from '../imagenes/divider.svg';
import BoxBg from './BoxBg';
import BoxOutline from './BoxOutline';
import Divider from './Divider';

/* import { Parallax } from 'react-scroll-parallax';
import Container from './Container';
import Image from './Image';

import imageFile1 from '../imagenes/alexander-tsang-1488076-unsplash.jpg';
import imageFile2 from '../imagenes/dimaz-fakhruddin-1477266-unsplash.jpg';
import imageFile3 from '../imagenes/evgeniy-sholokh-1484415-unsplash.jpg';
import imageFile4 from '../imagenes/maarten-deckers-248101-unsplash.jpg';
import imageFile5 from '../imagenes/martin-pechy-1474791-unsplash.jpg';
import imageFile6 from '../imagenes/julien-moreau-83192-unsplash.jpg';

import styles from '../css/Image.scss';
import '../css/styles.scss'; */


//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';


class SliderImagen extends Component {

    componentDidMount() {
        //window.scrollTo(0, 0);
        //const { innerWidth: width, innerHeight: height } = window;
        //const { parallaxController } = useController();
        // const handler = () => useController().update();
        // window.addEventListener('load', handler);
        // return () => window.removeEventListener('load', handler);

        if (window.screen.width > 390)
        {
            document.addEventListener('touchstart', this.touchstart);
            document.addEventListener('touchmove', this.touchmove);
    
            function touchstart(e) {
                e.preventDefault()
            }
    
            function touchmove(e) {
                e.preventDefault()
            }
        }
       
    }

    componentDidUpdate()  {

        if (window.screen.width > 390)
        {
            document.addEventListener('touchstart', this.touchstart);
            document.addEventListener('touchmove', this.touchmove);
    
            function touchstart(e) {
                e.preventDefault()
            }
    
            function touchmove(e) {
                e.preventDefault()
            }
        }

    }


    render() {



        const scrollAxis = "horizontal";

        const amount = 3;
        const offA = -60;
        const offB = 60;
        const elements = new Array(amount * 2 + 1).fill(null).map((x, i) => i);



        return (

            <div className="universo">

                <ParallaxProvider scrollAxis={scrollAxis}>
                    {/* <ParallaxCache></ParallaxCache> */}

                    <div className="horizontal">
                        <div className="centro">

                            {elements.map((i) => {

                                const n = i - amount;

                                return (
                                    <Fragment>
                                        <Parallax

                                            x={[offA * n, offB * n]}
                                            className="parallax"
                                        >


                                            <div className="parallaxImage2">Unidad {n}</div>


                                            <div className="ratio">
                                                <div className="inner">
                                                    <div className="box">Flota {n}</div>
                                                </div>
                                            </div>

                                        </Parallax>
                                        <div className="espacio"></div>
                                    </Fragment>

                                );

                            }
                            )
                            }


                            {/* <Parallax
                            x={[-60, 60]}
                            className="parallax"

                        >
                            
                            <div className="espacio">
                                
                            </div>
                            <div className="parallaxImage2">Bloque 2</div>
   
                          
                            <div className="ratio">
                                <div className="inner">
                                    <div className="box">B</div>
                                </div>
                            </div>
                        </Parallax> */}
                        </div>
                    </div>


                </ParallaxProvider>
            </div>

            /*  <div className={style.root}>
                 <Divider className={style.divider} />
                 <div className={style.container}>
                     <BoxBg className={style.boxBg} />
                     <Parallax
                         className={style.text}
                         offsetYMax={70}
                         offsetYMin={-70}
                       
                         offsetXMax={-30}
                         offsetXMin={30} 
                         y={[-70, 70]}
                         x={[-30, 30]}
                     >
                         <span className="h1">Horizontal</span>
                     </Parallax>
                     <Parallax
                         className={style.boxOutline}
                         offsetYMax={35}
                         offsetYMin={-35}
                         y={[-35, 35]}
                     >
                         <BoxOutline />
                     </Parallax>
                 </div>
             </div> */



            /* <Container scrollAxis="vertical">
                <div className={styles.image}>
                    <Parallax y={[20, -20]} className={styles.parallaxImage}>
                        <Image src={imageFile1} />
                    </Parallax>
                    <Parallax y={[-20, 20]} className={styles.parallaxImage}>
                        <Image src={imageFile2} />
                    </Parallax>
                    <Parallax y={[20, -20]} className={styles.parallaxImage2}>
                        <Image src={imageFile4} />
                    </Parallax>
                    <Parallax y={[-10, 10]} className={styles.parallaxImage}>
                        <Image src={imageFile5} />
                    </Parallax>
                    <Parallax y={[10, -10]} className={styles.parallaxImage}>
                        <Image src={imageFile3} />
                    </Parallax>
                    <Parallax y={[30, -30]} className={styles.parallaxImage2}>
                        <Image src={imageFile6} />
                    </Parallax>
                </div>
            </Container> */


            /*  <Fragment>
                 <Carousel
                 centerMode={true}
                 centerSlidePercentage={70}
                 swipeable={true}
                 swipeScrollTolerance={4}
                 useKeyboardArrows={true}
                 emulateTouch={true}
                 transitionTime={1000}
                 >
                  
                 
                         <div className="carta carta1">
 
                             <p className="legend">Legend 1</p>
                         </div>
                         <div className="carta carta2">
 
                             <p className="legend">Legend 2</p>
                         </div>
                         <div className="carta carta3">
 
                             <p className="legend">Legend 3</p>
                         </div>
                         <div className="carta carta4">
 
                             <p className="legend">Legend 4</p>
                         </div>
                        
 
     
                  
                 </Carousel>
             </Fragment> */

        );
    }

}


export default SliderImagen;