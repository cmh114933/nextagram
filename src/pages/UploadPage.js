import React, {useState, useEffect} from 'react';
import { Form, FormGroup, Input, FormText, Button } from 'reactstrap';
import axios from "axios"
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';


const UploadPage = () => {
  const [imageFile, setImageFile] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const history = useHistory()


  useEffect(() => {
    document.title = "Upload Your Image"
  }, [])

  const handleImageUpload = (e) => {
    e.preventDefault()
    const formData = new FormData()

    formData.append("image", imageFile)
    
    axios({
      method: "post",
      url: "https://insta.nextacademy.com/api/v1/images/",
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("token")
      },
      data: formData
    }).then((res) => {
      console.log(res)
      setImageFile(null)
      setPreviewImage(null)
      history.push("/profile")
      toast.success("Image uploaded successfully!")
    })
  }

  const handleInputChange = (e) => {
    setPreviewImage(URL.createObjectURL(e.target.files[0]))
    setImageFile(e.target.files[0])
  }

  return(
    // Your code will go here
    <div>
      <div className="card">
        {previewImage ? (
          <img
            src={previewImage}
            width="50%"
            height="50%"
            alt="preview"
          />
          ) : (
          <h3  className="text-center">
          </h3>
        )}
      </div>
      <Form onSubmit={handleImageUpload}>
        <FormGroup>
          <Input
            type="file"
            name="image-file"
            onChange={handleInputChange}
          />
          <FormText color="muted">
            Make sure the image being uploaded is a supported format.
          </FormText>
        </FormGroup>
        <Button type="submit" color="primary">
          Upload
        </Button>
      </Form>
    </div>
  )
}

export default UploadPage;