import  { useState } from 'react'

export const Calculaters = () => {
    const[num1,setNum1]=useState('')
    const[num2,setNum2]=useState('')
     const [result, setResult] = useState(null);
     const styles = {
  container: {
    maxWidth: "300px",
    margin: "auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  input: {
    width: "90%",
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "10px",
  },
};


    const handadd=()=>{
        setResult(Number(num1) + Number(num2));
    }
    const handsub=()=>{
        setResult(Number(num1) - Number(num2));
    }
    const handmul=()=>{
        setResult(Number(num1) * Number(num2));
    }
    const handdiv=()=>{
        setResult(Number(num1) / Number(num2));
    }
    const clear=()=>{
        setNum1('')
        setNum2('')
        setResult(null)
    }
  return (
    <div style={styles.container}>
        <h2>Simple Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={styles.input}
      />
      <br/>
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={styles.input}
      />
               <div style={styles.buttonContainer}>
              <button  style={styles.button} onClick={handadd}>+</button> 
                <button style={styles.button} onClick={handsub}>-</button>
                <button style={styles.button} onClick={handmul}>*</button>
                <button style={styles.button} onClick={handdiv}>/</button>
                <button style={styles.button} onClick={clear}>Clear</button>
              </div>

     {result !== null && <h3>Result: {result}</h3>}
        

    </div>
  )
}
