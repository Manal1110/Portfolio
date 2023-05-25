import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import path from "../../Assets/Projects/path.png";
import emotion from "../../Assets/Projects/emotion.png";
import pulse from "../../Assets/Projects/pulse.png";
import hotel from "../../Assets/Projects/hotel.png";
import suicide from "../../Assets/Projects/suicide.png";
import ghost from "../../Assets/Projects/ghost.png";
import pharma from "../../Assets/Projects/pharm.png";
import car from "../../Assets/Projects/car.png";
import snake from "../../Assets/Projects/snake.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects that I have worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="BookMyStay"
              description="Book My Stay is a comprehensive hotel management website developed using PHP, MySQL, XAMPP, JavaScript, CSS, HTML, and PHPUnit for testing. This website offers a user-friendly interface that allows users to easily book and manage their hotel reservations. The PHP programming language is used to handle the server-side processing and interact with the MySQL database for efficient data storage and retrieval. JavaScript enhances the website's interactivity and dynamic features, while CSS and HTML ensure a visually appealing and responsive design. Additionally, PHPUnit is employed for thorough testing of the website's functionalities, ensuring its reliability and robustness."
              ghLink="https://alakhawayn365-my.sharepoint.com/:u:/g/personal/m_mehdaoui_aui_ma/EawSPcvf14lNniOjiNLsAYQBbUCmUM5oQ7_8GnSTX9dnOA?e=dPDbwq"
              demoLink="https://youtu.be/ridYbec-tLU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ghost}
              isBlog={false}
              title="Bust The Ghost game"
              description="Bust the Ghost is an exciting Unity game developed with C#. Click on tiles to reveal the probabilities of finding the hidden ghost, and channel your inner detective as you strategically hunt it down. Similar to the classic Minesweeper, you can opt to hide the probabilities and rely solely on your intuition and wits to pinpoint the ghost's location. Get ready to embark on a thrilling journey of deduction and enjoy the immersive gameplay of Bust the Ghost!"
              ghLink="https://alakhawayn365-my.sharepoint.com/:u:/g/personal/m_mehdaoui_aui_ma/EX0ALbN1GZFCl6l1yLjpCe0BWiFZLMnRWM-9P7BQCsuk1Q?e=wassxv"
              demoLink="https://youtu.be/tcSBHPJhE7w"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pulse}
              isBlog={false}
              title="Pulse"
              description="Pulse is an advanced hospital management website created with React, Express.js, JavaScript, CSS, HTML, Axios, PostgreSQL, Postman, and Node.js. With its user-friendly interface and robust functionality, Pulse revolutionizes hospital operations by efficiently managing data and optimizing healthcare delivery. Experience seamless navigation and enhanced efficiency with Pulse's comprehensive suite of features."
              ghLink="https://github.com/soumyajit4419/pulse.io"
              demoLink="https://youtu.be/6jXyFawC_8Q"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={path}
              isBlog={false}
              title="Pathfinding with Unity game"
              description="PathQuest is a Unity game that demonstrates pathfinding algorithms like BFS, DFS, Dijkstra's, A*, and UCS. Explore the environment, witness all possible paths, and guide the character to the goal along the shortest route. Enjoy interactive gameplay by moving the character freely. Experience the thrill of discovery and adventure in PathQuest!"
              ghLink="https://alakhawayn365-my.sharepoint.com/:u:/g/personal/m_mehdaoui_aui_ma/EcVL4xQlvLFOmpx3td77wXEB31KDcFQfFHbXwbEchZMkJw?e=sjHun5"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pharma}
              isBlog={false}
              title="Pharmacy management system"
              description="PharmaShop is an upcoming pharmacy management website currently under development. It is designed to cater to the needs of managers, pharmacists, and salespersons in streamlining pharmacy operations. Developed using PHP, MySQL, CSS, Bootstrap, HTML, and JavaScript, PharmaShop will offer user-friendly interfaces and features for inventory management, prescription tracking, sales processing, and customer management. Stay tuned for the launch of PharmaShop, providing an efficient solution for pharmacy professionals."
              ghLink="https://alakhawayn365-my.sharepoint.com/:u:/g/personal/m_mehdaoui_aui_ma/EblWZ7mMNHpAtVHjmdp3IdIB5k-gioRamiVTS7wk8ZwJyw?e=Rvoz0J"
              demoLink="https://youtu.be/lMFNcjzIo0c"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Delivery car"
              description="Delivery Car is a 2D Unity game where players drive a car to find pink packages and deliver them to blue customers while avoiding obstacles. They can collect speed boosts by driving through yellow circles. The game offers responsive controls, immersive graphics, and rewarding gameplay with different levels or stages to explore."
              ghLink="https://github.com/Manal1110/Delivary-car"
              demoLink="https://youtu.be/nGs_PFEz0us"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="The Snake game"
              description="The Snake Game in Unity using C# is currently under development. Players will soon be able to control a snake, collect food, and avoid obstacles to grow longer. Exciting features like power-ups, different levels, and a high-score system are being implemented. Stay tuned for updates as the game progresses towards completion."
              ghLink="https://github.com/Manal1110/Snake-game"
              demoLink="https://youtu.be/COaZnOneCvs"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
