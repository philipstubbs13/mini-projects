import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import { createClient } from '@supabase/supabase-js';
import { v4 as uuidv4 } from 'uuid';

const supabase = createClient("https://esgaaxqmsmkvnowvnxhk.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzZ2FheHFtc21rdm5vd3ZueGhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI2MDA3MDgsImV4cCI6MTk4ODE3NjcwOH0.uiXagEaApK80uCRlEy8pl4Dzkx3pU7l1xE4DXQS90kk");

const CDNURL = "https://esgaaxqmsmkvnowvnxhk.supabase.co/storage/v1/object/public/videos/"

function App() {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const { data, error } = await supabase
      .storage
      .from('videos')
      .list('')
    
    if (data !== null) {
      setVideos(data);
    } else {
      console.log(error);
      alert("Errr grabbing files from Supabase");
    }
  }

  useEffect(() => {
    getVideos();
  }, [])

  async function uploadFile(e) {
    const videoFile = e.target.files[0];
    const { error } = await supabase.storage
      .from('videos')
      .upload(uuidv4() + ".mp4", videoFile)
    if (error) {
      console.log(error);
      alert("Error uploading file to Supabase");
    }

    getVideos();
  }

  return (
    <Container className='mt-5' style={{ width: "700px" }}>
      <h1>VideoFeed</h1>
      <Form.Group className="mb-3 mt-3">
        <Form.Label>Upload your video here!</Form.Label>
        <Form.Control type="file" accept="video/mp4" onChange={(e) => uploadFile(e)} />
      </Form.Group>

      <Row xs={1} className="g-4">
        {videos.map((video) => {
          console.log(video);
          return (
            <Col>
              <Card>
                <video height="380px" controls>
                  <source src={CDNURL + video.name} type="video/mp4" />
                </video>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default App;
