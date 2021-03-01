import React from "react";
import { Link } from "react-router-dom";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src="" alt="" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>User</strong>
              <Link to="/dashboard">Profile</Link>
            </div>
            <img src="" alt="" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
