import React, { useState, useEffect } from 'react';
import './Home.css'
import Box from "./Box"
import DividerImage from '../assets/divider-7568849_1280.webp';

function Home() {

  const [title,setTitle] = useState('');
  const [description,setdescription] = useState('');
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    // Create an async function to fetch the data
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3001/projects', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        
        // Set the fetched projects to state
        setProjects(data.projects);
        
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    // Call the function
    fetchProjects();
    console.log(projects);
  }, []); 

  return (
    <div className="container-fluid h-100">

      <div className="row" style={{ width: '1347px' }}>

        <div style={{ height: '80px'/*, border: '2px solid black'*/ }}>
          <div className="center-text">
            <h2>Prathmesh Chandrakant Rasal</h2>
            <h7> <a href="https://www.google.com/maps?q=Kolhapur,+Maharashtra" target="_blank">Kolhapur</a> | <a href="">+917219713604</a> | <a href="https://mail.google.com/mail/?view=cm&fs=1&to=prathmeshrasal2003@gmail.com" target="_blank">
            prathmeshrasal2003@gmail.com</a> | <a href="www.linkedin.com/in/prathmesh-rasal-152851241">Linkedin</a></h7>
          </div>
        </div>

      </div>
      <div className="divider"></div>

      <div className="row" style={{ width: '1347px' }}>

        <div style={{ height: '200px'/*, border: '2px solid black'*/ }}>
          <div className="row heading" style={{ width: '1347px', height: '40px' }}>
            EDICUATION
          </div>
          <div className="row " style={{ width: '1347px', height: '80px' }}>
            <b>B.Tech in Computer Science and Engineering</b>
            <p>DKTE Society's Textile and Engineering
              Institute, Ichalkaranji <br />
              12/2021 - 06/2024, </p>
          </div>
          <div className="row" style={{ width: '1347px', height: '80px' }}>
            <b>Diploma in Computer Science and Engineering </b>
            <p>Bapuji Salonkhe Institute of Engineering and
              Institute, kolhapur  <br />
              03/2018 - 06/2021, </p>
          </div>
        </div>

      </div>
      <div className="divider"></div>
      <div className="row" style={{ width: '1347px' }}>

        <div className='v-scrol' style={{ height: '400px' }}>
          <div className="row heading" style={{ width: '1347px', height: '50px' }}>
            PROJECTS
          </div>
            {projects.map((project)=>(
          <div className="row mb-4" style={{ width: '1347px', height: '110px' }}>
              <b>{project.title}</b>
              <p>(08/2022 - 11/2022)</p>
              <p>{project.description}</p>
          </div>
            ))}
            
          {/* <div className="row mb-4" style={{ width: '1347px', height: '130px' }}>
            <b>Library Management System Using PHP CSS and SQL</b>
            <p>(08/2022 - 11/2022)</p>
            <p>● A user-friendly library management system has been developed, incorporating a special feature of a ChatBot to
              enhance its functionality and usability.</p>
            <p>● This project has been developed utilizing the programming languages of HTML, CSS, and JavaScript to create a
              dynamic and interactive web-based solution. </p>
          </div>
          <div className="row mb-4" style={{ width: '1347px', height: '50px' }}>
            <b>PickDrop service web application using HTML CSS PHP JS and SQL</b>
            <p>(02/2024 - 05/2024)</p>
            <p>● The idea of the project is about providing an picking and drooping services.</p>
            <p>● It has user friendly Interface and provides a platform for riders and customers to collaborate.
              Nov 2022</p>
            <p>● Successfully utilized API, achieving a 30% reduction in data retrieval time and seamlessly integrating critical information into
              the project, resulting in a 15% efficiency improvement. </p>
          </div> */}
        </div>

      </div>
      <div className="divider"></div>
      <div className="row" style={{ width: '1347px' }}>

        <div className='heading' style={{ height: '200px' }}>
          <div className="row heading" style={{ width: '1347px', height: '50px' }}>
            SKILLS
          </div>
          <div className="box">
            <Box skill="JAVA" />
            <Box skill="HTML" />
            <Box skill="CSS" />
            <Box skill="Java Script" />
            <Box skill="PHP Laravel" />
            <Box skill="React.js" />
            <Box skill="Node.js" />
            <Box skill="SQL" />
            <Box skill="Data Structure" />
            <Box skill="Gir & GitHub" />
          </div>
        </div>

      </div>
      <div className="divider"></div>
      <div className="row" style={{ width: '1347px' }}>
        <div className='v-scrol' style={{ height: '250px' }}>
          <div className="row heading" style={{ width: '1347px', height: '50px' }}>
            EXPERANCE
          </div>
          <div className="row" style={{ width: '1347px', height: '110px' }}>
            <b>Asesa Digital</b>
            <p>Jan 2024 - curent</p>
            <p>● Collaborated with the team to create APIs and integrated.</p>
            <p>● Diagnosed and resolved 5+ website issues, resulting in a 40% decrease in customer complaints and a 20% increase in overall
              user satisfaction.</p>
            <p>● Spearheaded the development of a highly responsive and visually appealing static website, resulting in a 50% increase in
              website traffic.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home