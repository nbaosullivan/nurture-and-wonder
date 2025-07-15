import Button from "@/components/ui/Button";

export default function ReadyToBookCTA() {
  return (
    <div className="text-center my-32">
      <h2 className="text-2xl md:text-3xl font-extrabold text-mountain-purple mb-2">Ready to chat?</h2>
      <p className="prose prose-xl max-w- mx-auto text-evergreen mb-4">Get in touch to discuss your family’s needs or to book a call with Hannah.</p>
      <Button href="/contact">Contact Hannah</Button>
    </div>
  );
} 