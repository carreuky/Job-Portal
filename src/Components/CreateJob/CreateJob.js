import React from 'react'
import "./CreateJob.css";

function CreateJob () {
  function handleChange(event){

    console.log([event.target.name], event.target.value)


  }

  function handleSubmit(e) {
    e.preventDefault();
    // alert('')
    // const itemData = {
    //   name: name,
    //   category: category,
    //   isInCart: false,
    // };
    // fetch("http://localhost:4000/items", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(itemData),
    // })
    //   .then((r) => r.json())
    //   .then((newItem) => console.log(newItem));
  }

const CreateJob=(
    <div class="form-style-8" id="formDiv">
    <h2>Create A New Job Posting</h2>
    <form id="formClick" onSubmit={handleSubmit}>
      <input onChange={handleChange} className='input-lg' type="text"  name="company" placeholder="Company Name"/>
      <input onChange={handleChange} className='input-lg' type="text"  name="job" placeholder="Job Type"/>
      <input onChange={handleChange} className='input-lg' type="url"  name="url" placeholder="Image url"/>
      <input onChange={handleChange} className='input-lg' type="text"  name="location" placeholder="Location"/>
      <input onChange={handleChange} className='input-lg' type="text"  name="salary" placeholder="Salary"/>


    


      <input  type="submit" value="Submit" name="submit" id="submit" />
    </form>
  </div>
)
  return (
    <div className='CreateJob'>
        {CreateJob}
    </div>
  )
}
export default CreateJob