import React from "react";
import { Col, Row } from "react-bootstrap";
import stm32Board from "../../Assets/Hardware/stm32Board.png";
import arduinoBoard from "../../Assets/Hardware/arduino.png";
function Hardwarestack() {
  return (
    <div className="scroller">
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">STM32 Board MINI-V3</div>
        <img src={stm32Board} alt="stm32 board" width="150px" height="150px" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Arduino</div>
        <img
          src={arduinoBoard}
          alt="arduino board"
          width="150px"
          height="100px"
        />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Raspberry Pi</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">ESP8266</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">MQ-135 Air Quality Sensor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">L298N Motor Driver</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">HC-SR04 Ultrasonic Sensor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">LM35 Temperature Sensor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Digital Tilt Sensor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">DHT11 Sensor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">HC-05 Bluetooth</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">3-Axis Digital Compass IC HMC5883L</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <div className="text">Arduino</div>
      </Col>
    </div>
  );
}

export default Hardwarestack;
