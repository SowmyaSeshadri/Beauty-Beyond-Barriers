import React from "react";
import { useNavigate } from "react-router-dom";
import ServiceOptions from "./ServiceOptions";
import { Col, Row } from "antd";
import { COLORS } from "../../constants/colors";
import Location from "../../components/Location";

import Title from "antd/es/typography/Title";
import Salons from "../../components/Salons";
import Stylists from "../../components/Stylists";
import More from "../../components/common/More";

function Services() {
  const navigate = useNavigate();

  const confirm = () => {
    navigate("/salons");
  };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Row
        gutter={24}
        style={{
          margin: "10px",
        }}
      >
        <Col span={24}>
          <Location location="3604 Chestnut, Philadelphia" />
        </Col>
      </Row>

      <Title
        style={{
          padding: "0 20px 0px 20px",
          marginTop: "30px",
          textAlign: "left",
          fontWeight: 600,
          color: COLORS.SECONDARY,
        }}
        level={5}
      >
        Sandra, what are you looking for?
      </Title>

      <ServiceOptions />

      <Row
        style={{
          position: "relative",
        }}
      >
        <Col>
          <Title
            style={{
              padding: "0 20px 0px 20px",
              textAlign: "left",
              fontWeight: 600,
              color: COLORS.SECONDARY,
            }}
            level={5}
          >
            Best salons picked for you
          </Title>
        </Col>
        <Col
          style={{
            position: "absolute",
            right: "20px",
            top: "0px",
          }}
        >
         <More navTo={'/'} />
        </Col>
      </Row>

      <Salons />

      <Row
        style={{
          position: "relative",
        }}
      >
        <Col>
          <Title
            style={{
              padding: "0 20px 0px 20px",
              textAlign: "left",
              fontWeight: 600,
              color: COLORS.SECONDARY,
            }}
            level={5}
          >
            Trained stylists at your doorstep
          </Title>
        </Col>
        <Col
          style={{
            position: "absolute",
            right: "20px",
            top: "0px",
          }}
        >
          <More navTo={'/'} />
        </Col>
      </Row>
      <Stylists />
    </div>
  );
}

export default Services;
