import axios from 'axios';
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/homepage.module.css'


export default function Home(){
    const [trawlingNumber, setTrawlingNumber] = useState('');
    const [trawlingDate, setTrawlingDate] = useState('');
    const [totalVolume, setTotalVolume] = useState('');
    const [fishType, setFishType] = useState('');
    const [fishCategory, setFishCategory] = useState('');
    const [fishGrade, setFishGrade] = useState('');
    const [nofBoxes, setNofBoxes] = useState('');
    const [position, setPosition] = useState('');

    let trawlingDetails =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/trawlingDetails",{
          "trawlingNumber": trawlingNumber,
          "trawlingDate": trawlingDate,
          "totalVolume": totalVolume,
          "fishDetails": [
              {
                  "fishType": fishType,
                  "fishCategory": fishCategory,
                  "fishGrade": fishGrade,
                  "nofBoxes": nofBoxes,
                  "position": position
              }
          ]  
        })

    }

    const [showMe, setShowMe] = useState(false);
    function toggle(){
        setShowMe(!showMe);       
      }
    return(
        <div>
            <Head>
                <meta charset="utf-8" />    
                <title>Homepage</title>
                {/* <link rel="stylesheet" type="text/css" href="Home.css" /> */}
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap" rel="stylesheet"/>
                
            </Head>
            <div className={styles.body}>
                <div className={styles.lbox}>
                    <p className={styles.logo}>
                        <img src="https://lh3.googleusercontent.com/LyIKxlC8U3FzfX_LbDB0SJjUFY3Pg6_9uIoSM9l87csKnoX2IsMiP6XR4LkmTRdxUhSfLGp--Qp0fPoAUFzVCuO3DtgklC4o6JsVTD1dSY-nEvMYiWbMUqSbBfys4oGl8-Fkxn1TbrM=w2400" />
                    </p>
                    <p className={styles.sidebar}>
                        <button className={styles.button1} id='b2' onClick={toggle}>Daily Catch</button>            
                        <input className={styles.button1} type="button" id="b3" value="Warehouse" />            
                    </p>
                </div>
                <div className={styles.rbox}>
                    <div>
                        <p>
                            <img className={styles.search} src="https://lh3.googleusercontent.com/b1jvyyu5nD62ZbbBOM1iduXFhGkMXwjJxjHVOB72U4tNdtVk38wdSaSrn1KSWT0PL0DdNit9Lx96ys7VIZPJrUpXtTNQG6NVx_UVysAqee8zOMHx9tWcO2X9_b31AP4wTxPbSWkWivA=s33-p-k" /> 
                        </p>
                        <p>
                            <img className={styles.settings} src="https://lh3.googleusercontent.com/1rwis3j3fN0oa-QWTH4NxHx135dGnBZzEYbvOp-PArR9Oz72DfPe2-rtvMVMQGUS7852q3_1BoPHyumz6ve0xH-seH4uhZxVZ5lKiBiFxE4Q4d6AVs4akKcTVKyt6PebQ5mRsJuj4SM=w33-h34-p-k" /> 
                        </p>
                        <p>
                            <img className={styles.logout} src="https://lh3.googleusercontent.com/OIl29IJ9Wv2lrIiHR8xvJ8ibhYkASkMmBqnDDshUIyTv96mxOOiv-_J19rOihZ0iZCk9HjbfvwQjszVAPDJ6MFBP6uMjp9gZJnH3k1l_FJ6CN-nGgQWDn7oClwRk0Rv4SY-1kRI5qwA=w30-h36-p-k" />
                        </p>
                    </div>
                    <div style={{ display: showMe?"block":"none"}}>
                        <form className={styles.formbox1} onSubmit={trawlingDetails}>
                            <div className={styles.left}>
                                <label className={styles.label1}>Trawling Number</label><br />
                                <div className={styles.tnum}>
                                    <input className={styles.tbox} type="text" id="t1" name="tnum" value="13AD" />
                                </div>
                            </div>
                            <div className={styles.left}>
                                <label className={styles.label2}>Trawling Date</label>
                                <div className={styles.tdate}>
                                    <input className={styles.tbox} type="text" id="t2" name="tdate" value="17-03-2022" />
                                </div>
                            </div>
                            <div className={styles.left}>
                                <label className={styles.label3}>Total Volume</label>
                                <div className={styles.tvol}>
                                    <input className={styles.tbox} type="text" id="t3" name="tvol" value="1000" />
                                </div>
                            </div>                        
                            <div className={styles.left}>
                                <div className={styles.bar}>
                                    <label className={styles.label4}>type</label>
                                    <label className={styles.label5}>category</label>
                                    <label className={styles.label6}>Grade</label>
                                    <label className={styles.label7}>No of Boxes</label>
                                    <label className={styles.label8}>positions</label>
                                </div>
                                <select className={styles.d1}>
                                    <option>Bluefin Tuna</option>
                                    <option>Angelfish</option>
                                    <option>Catfish</option>
                                </select>                                
                                <select className={styles.d2}>
                                    <option>BFT1</option>
                                    <option>BFT2</option>
                                    <option>BFT3</option>
                                    <option>AF1</option>
                                    <option>AF2</option>
                                    <option>AF3</option>
                                    <option>CF1</option>
                                    <option>CF2</option>
                                    <option>CF3</option>
                                </select>                                
                                <select className={styles.d3}>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </select>                                
                                <input className={styles.d4} type="text" />                               
                                <select className={styles.d5}>
                                    <option>S1F1Sl1</option>
                                    <option>S1F1Sl2</option>
                                    <option>S1F1Sl3</option>
                                    <option>S1F1Sl4</option>
                                    <option>S1F1Sl5</option>
                                    <option>S1F2Sl1</option>
                                    <option>S1F2Sl2</option>
                                    <option>S1F2Sl3</option>
                                    <option>S1F2Sl4</option>
                                    <option>S1F2Sl5</option>
                                    <option>S1F3Sl1</option>
                                    <option>S1F3Sl2</option>
                                    <option>S1F3Sl3</option>
                                    <option>S1F3Sl4</option>
                                    <option>S1F3Sl5</option>
                                    <option>S2F1Sl1</option>
                                    <option>S2F1Sl2</option>
                                    <option>S2F1Sl3</option>
                                    <option>S2F1Sl4</option>
                                    <option>S2F1Sl5</option>
                                    <option>S2F2Sl1</option>
                                    <option>S2F2Sl2</option>
                                    <option>S2F2Sl3</option>
                                    <option>S2F2Sl4</option>
                                    <option>S2F2Sl5</option>
                                </select>
                                <div>
                                    <input className={styles.b1} type="submit" id="b1" value="ADD" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div>           
    )
}