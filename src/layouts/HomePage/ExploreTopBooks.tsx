import { Button, Container } from "reactstrap";

export const ExploreTopBooks = () => {
  return (
    <div>
      <Container fluid className="p-5 mb-4 bg-dark header">
        <Container className="py-5 text-white d-flex justify-content-center align-items-center">
          <div>
            <h1 className="display-5 fw-bold">
              Ready for your next adventure?
            </h1>
            <p className="col-md-8 fs-4">
              Welcome to the Explore Top Books section!
            </p>
            <Button color="primary" className="btn-lg text-white">
              Explore Top Books
            </Button>
          </div>
        </Container>
      </Container>
    </div>
  );
};
