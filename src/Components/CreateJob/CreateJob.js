import React,{useState} from 'react'
import "./CreateJob.css";

function CreateJob ({handleNew ,handleDisplay}) {

  const[job, setJob]=useState('')
  const[url,setUrl]=useState('')
  const[location,setLocation]=useState('')
  const[salary, setSalary]=useState('')
  const[company, setCompany]=useState('')




  function handleJob(event){
  setJob(event.target.value)
  }
  function handleUrl(event){
    setUrl(event.target.value)
    }
  
  function handleSalary(event){
    setSalary(event.target.value)
    }

    function handleLocation(event){
      setLocation(event.target.value)
      }
    function handleCompany(event){
        setCompany(event.target.value)
        }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem={
      job_type:job,
      company:company,
      image:url,
      salary:salary,
      location:location
    }

    console.log(newItem)
    fetch('https://jbap.herokuapp.com/jobs', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((r) => r.json())
    .then((newjob) => {
      handleNew(newjob)
 
    });
    setJob('')
    setUrl('')
    setLocation('')
    setCompany('')
    setSalary('')

    handleDisplay()


  }
   


const CreateJobCard=(
    <div class="form-style-8" id="formDiv">
    <h2>Create A New Job Posting</h2>
    <form id="formClick" onSubmit={handleSubmit} >
      <input onChange={()=>handleCompany} className='input-lg' type="text"  name="company"  placeholder="Company Name"/>
      <input onChange={()=>handleJob} className='input-lg' type="text"  name="job" placeholder="Job Type"/>
      <input onChange={()=>handleUrl} className='input-lg' type="url"  name="url" placeholder="Image url"/>
      <input onChange={()=>handleLocation} className='input-lg' type="text"  name="location" placeholder="Location"/>
      <input onChange={()=>handleSalary} className='input-lg' type="text"  name="salary" placeholder="Salary"/>
      <input type="submit" value="Submit" name="submit" id="submit"/>
    </form>
  </div>
)
  return (
    <div className='CreateJob'>
        {CreateJobCard}
    </div>
  )
}
export default CreateJob