import Navbar from '@/components/Navbar'
import JoinOurTeam from '@/components/upload/CareerHeder'
import FileUploadForm from '@/components/upload/formUpload'
import React from 'react'

const Page = () => {
  return (
    <div>
        <div className="bg-primary">
        <Navbar />
       </div>
       <JoinOurTeam/>
       <FileUploadForm/>
    </div>
  )
}

export default Page