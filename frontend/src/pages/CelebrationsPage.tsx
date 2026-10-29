import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import MomentGallery from "../components/moments/MomentGallery";
import MomentUploadForm from "../components/moments/MomentUploadForm";
import { useMoments } from "../hooks/useMoments";

export default function CelebrationsPage() {
  const celebrations = useMoments("CELEBRATION");
  const happyMoments = useMoments("HAPPY_MOMENT");

  return (
    <>
      <section className="py-16">
        <Container>
          <SectionHeading
            title="Celebrations at The Half Plate"
            subtitle="Birthdays, anniversaries, and get-togethers we've been lucky to host"
          />
          <MomentGallery
            moments={celebrations.data}
            emptyMessage="No celebration photos yet — be the first to share one!"
          />
          <div className="mt-10">
            <MomentUploadForm
              category="CELEBRATION"
              title="Shared a celebration with us?"
              description="Upload a photo from your birthday, anniversary, or get-together at The Half Plate."
              onSubmitted={celebrations.addMoment}
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-16">
        <Container>
          <SectionHeading
            title="Happy Moments"
            subtitle="Snapshots of good times our guests have shared with us"
          />
          <MomentGallery
            moments={happyMoments.data}
            emptyMessage="No happy moments shared yet — be the first to upload one!"
          />
          <div className="mt-10">
            <MomentUploadForm
              category="HAPPY_MOMENT"
              title="Share your happy moment"
              description="Had a great time with us? Upload a photo from your visit."
              onSubmitted={happyMoments.addMoment}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
