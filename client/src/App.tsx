
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {

  const [formData, setFormData] = useState({
      randInt: 0,
      cityName: "",
      personName: "",
      hobby: "",
      animal: "",
      phrase: ""
    })

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData({...formData, [name]: value})
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const payload = {...formData, randInt: Number(formData.randInt)}
      axios
        .post('http://localhost:8080/api/omikuji', payload)
        .then((res) => {
          console.log("Success:", res)
        })
        .catch((err) => {
          console.log("Error: ", err)
        })
    }

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/api/getAllFruits')
  //     .then((res) => {
  //       console.log("RES: ", res.data)
  //       setFormData(res.data)
  //     })
  //     .catch((err) => {
  //       console.log("ERR: ", err)
  //     })
  // }, [])

  return (
    <div className='w-screen h-screen bg-slate-900/70 text-white flex flex-col items-center justify-center gap-4'>
      <h1 className='font-bold text-3xl underline underline-offset-4'>Practicing Form Submission</h1>
      <form className='w-3/4 flex flex-wrap items-center justify-center gap-2' onSubmit={submitHandler}>
        <label className='flex flex-col gap-1'>Random Number
          <input type="number" name="randInt" onChange={changeHandler} className='text-blue-900 font-bold p-1'/>
        </label>
        <label className='flex flex-col gap-1'>City Name
          <input type="text" name="cityName" onChange={changeHandler} className='text-blue-900 font-bold p-1'/>
        </label>
        <label className='flex flex-col gap-1'>Person's Name
          <input type="text" name="personName" onChange={changeHandler} className='text-blue-900 font-bold p-1'/>
        </label>
        <label className='flex flex-col gap-1'>Hobby
          <input type="text" name="hobby" onChange={changeHandler} className='text-blue-900 font-bold p-1'/>
        </label>
        <label className='flex flex-col gap-1'>Animal
          <input type="text" name="animal" onChange={changeHandler} className='text-blue-900 font-bold p-1'/>
        </label>
        <label className='flex flex-col gap-1'>Say something nice!
          <textarea cols={70} rows={10} name='phrase' onChange={changeHandler} className='text-blue-900 font-bold p-1'></textarea>
        </label>
        <input type="submit" value="Submit Omikuji Form" className='w-[400px] mt-10 bg-blue-900/70 px-2 py-1 cursor-pointer'/>
      </form>
    </div>
  )
}

export default App