import React from 'react'
import "./CreateJob.css";

function CreateJob
() {
const CreateJob=(
    <div class="form-style-8" id="formDiv">
    <h2>Create A New Job Posting</h2>
    <form id="formClick">
      <input className='input-lg' type="text" id="input1" name="field1" placeholder="Company Name"/>
      <input className='input-lg' type="text" id="input2" name="field1" placeholder="Job Type"/>
      <input className='input-lg' type="text" id="input3" name="field2" placeholder="Job Description" />
      <input className='input-lg' type="url" id="input4" name="field3" placeholder="Image url"/>
      <input className='input-lg' type="text" id="input5" name="field3" placeholder="Location"/>
      <input className='input-lg' type="text" id="input6" name="field3" placeholder="Skill 1"/>
      <input className='input-lg' type="text" id="input7" name="field3" placeholder="Skill 2"/>
      <input className='input-lg' type="text" id="input8" name="field3" placeholder="Skill 3"/>


      <input type="submit" value="Submit" name="submit" id="submit" />
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