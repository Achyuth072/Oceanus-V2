import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useToasts } from 'react-toast-notifications'




export default function Login() {
    const [loginDetails, setloginDetails] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { addToast } = useToasts();

    
    
    useEffect(() => {
        // fetch(
        //    "http://localhost:8080/login", {
        //        method: 'POST', body: {
        //            "uname": "user1",
        //            "password": 1223
        //        }
        //    }).then(res => res.json()).then(result => console.log(result))
        // axios.post("http://localhost:8080/login", {
        //     "uname":"user1",
        //     "password": 1223
        //   })
        //   .then(function (response) {
        //     console.log(response.data.message);
        //     if(response.data.message=='Authorized'){
        //         window.location.href="/about"
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      

            }

        )
        let login = (e)=>{
            e.preventDefault(); 
            axios.post("http://localhost:8080/login", {
            "uname": username,
            "password": password
          })
          .then(function (response) {
            console.log(response.data.message);
            if(response.data.message=='Authorized'){
                // window.location.href="/"
                Router.push('/')
                addToast("Authorized",{appearance: "success"})                                
            }
            else if(response.data.message=='Unauthorized'){
                addToast("Incorrect Password",{appearance: "error"})  

            }
            else if(response.data.message=='User Not Found'){
                addToast("User Not Found",{appearance: "error"})  

            }
            else{
                addToast("Internal Server Error",{appearance: "error"})
            }
                       
          })
          .catch(function (error) {
            console.log(error);
          });

        };

  return (
    <div >
          <Head>
              <meta charset="utf-8" />
              <title>Oceanus Exports</title>              
              <link rel="preconnect" href="https://fonts.googleapis.com"/>
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
              <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700;900&display=swap" rel="stylesheet"/>
                      
          </Head>

          <div className={styles.body}>
              <div className={styles.lbox}>
                    <img src="https://lh3.googleusercontent.com/pzUZ2qGEhsmPP69b-P6oH8SqoSkGDjjdr9KnRN5uYpKQf0NcJri_QB5PZqlHR4e4FGr4lrR9AiK5ZBMn1RH1556aucFLBFBUpGxez-3B9zmvpWB3DDV0kt-wpiHFPkv56jUxNbOp6Dg=w2400" referrerPolicy="no-referrer"/>
                 </div>
              <div className={styles.rbox}>
                  <p className={styles.logo}>
                          <img src="https://lh3.googleusercontent.com/LyIKxlC8U3FzfX_LbDB0SJjUFY3Pg6_9uIoSM9l87csKnoX2IsMiP6XR4LkmTRdxUhSfLGp--Qp0fPoAUFzVCuO3DtgklC4o6JsVTD1dSY-nEvMYiWbMUqSbBfys4oGl8-Fkxn1TbrM=w2400" referrerPolicy="no-referrer"  />
                          
                      </p>
                  <p className={styles.logint}>
                          LOGIN
                      </p>
                  <p className={styles.welcome}>
                          Welcome To Oceanus
                  </p><br /><br />
                  <form onSubmit={login}>
                      <p>
                          <input className={styles.email} type="text" id="t1" value={username} onChange={e => setUsername(e.target.value)} />
                      </p>
                      <p>
                          <input className={styles.password} type="password" id="p1" value={password} onChange={e => setPassword(e.target.value)}/>
                      </p>
                      <p className={styles.pb}>
                          <input className={styles.checkbox} type="checkbox" id="cb1" value="Remember Me" />
                          <label className={styles.label} for="cb1">Remember Me</label>
                          <a className={styles.fp} id="a1`">Forgot password?</a>
                      </p>           
                      
                      <input className={styles.button} type="submit" id="b1" value="LOGIN" />                                                 
                      
                    </form>
                </div>
            </div>    
        </div>
    )
}
