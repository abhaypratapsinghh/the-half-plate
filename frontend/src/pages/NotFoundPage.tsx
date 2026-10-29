import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

export default function NotFoundPage() {
  return (
    <section className="py-24">
      <Container className="text-center">
        <h1 className="font-serif text-4xl font-semibold text-ink">Page not found</h1>
        <p className="mt-3 text-muted">The page you're looking for doesn't exist.</p>
        <div className="mt-8">
          <Button to="/">Back to home</Button>
        </div>
      </Container>
    </section>
  );
}
