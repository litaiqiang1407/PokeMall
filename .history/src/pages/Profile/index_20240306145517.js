function Profile({ children }) {
  return (
    <Container>
      <Row>
        <Col lg={3} md={3} sm={12} xs={12}>
          <ProfileMenu />
        </Col>
        <Col lg={9} md={9} sm={12} xs={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
