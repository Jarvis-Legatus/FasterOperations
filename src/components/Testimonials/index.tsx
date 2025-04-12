import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    designation: "Operations Manager @ Tech Solutions",
    content:
      "The AI-driven insights provided clarity we never had before. Our decision-making is faster and more effective.",
    image: "/images/testimonials/author-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Samantha Lee",
    designation: "Marketing Director @ Creative Co.",
    content:
      "Automating our repetitive marketing tasks freed up significant time, allowing our team to focus on strategic initiatives.",
    image: "/images/testimonials/author-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "David Chen",
    designation: "E-commerce Owner @ Retail Online",
    content:
      "Implementing their automation solution streamlined our order processing and significantly reduced errors. Highly recommended!",
    image: "/images/testimonials/author-03.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Client Success Stories"
          title="Hear From Our Satisfied Partners"
          paragraph="Discover the real-world impact of our AI and automation solutions on businesses like yours."
          width="640px"
          center
        />

        <div className="mt-[60px] flex flex-wrap lg:mt-20 gap-y-8">
          {testimonialData.map((testimonial, i) => (
            <SingleTestimonial key={i} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
