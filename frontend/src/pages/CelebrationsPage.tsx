import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import MomentCarousel from "../components/moments/MomentCarousel";
import MomentUploadForm from "../components/moments/MomentUploadForm";
import { useMoments } from "../hooks/useMoments";

export default function CelebrationsPage() {
  const celebrations = useMoments();

  return (
    <section className="py-16">
      <Container>
        <SectionHeading
          title="Celebrations at The Half Plate"
          subtitle="Birthdays, anniversaries, and get-togethers we've been lucky to host"
        />
        <MomentCarousel
          moments={celebrations.data}
          emptyMessage="No celebration photos yet — be the first to share one!"
        />
        <div className="mt-10">
          <MomentUploadForm
            title="Shared a celebration with us?"
            description="Upload a photo from your birthday, anniversary, or get-together at The Half Plate."
            onSubmitted={celebrations.addMoment}
          />
        </div>
      </Container>
    </section>
  );
}
