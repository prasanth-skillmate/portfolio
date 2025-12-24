import { Card, CardContent } from '@/components/ui/card';
import { Quote, ExternalLink, Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface Testimonial {
  id: string;
  name: string;
  role?: string;
  college?: string;
  text: string;
  link?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({ 
  testimonials, 
  title = "What Colleges Say",
  subtitle = "Trusted by academic institutions across India"
}: TestimonialsSectionProps) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 relative bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block font-mono text-blue-400 text-sm uppercase tracking-widest mb-3">
              {'// Testimonials'}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold font-display mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
                {subtitle}
              </p>
            )}
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="group border-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                    <CardContent className="pt-6 flex flex-col flex-grow">
                      {/* Quote Icon */}
                      <div className="mb-4">
                        <Quote className="w-8 h-8 text-blue-400/50" />
                      </div>

                      {/* Rating */}
                      {testimonial.rating && (
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < testimonial.rating!
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : 'text-muted-foreground/30'
                              }`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Testimonial Text */}
                      <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="pt-4 border-t border-blue-400/20">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-sm text-foreground">
                              {testimonial.name}
                            </p>
                            {testimonial.role && (
                              <p className="text-xs text-muted-foreground">
                                {testimonial.role}
                              </p>
                            )}
                            {testimonial.college && (
                              <p className="text-xs text-blue-400 font-medium mt-1">
                                {testimonial.college}
                              </p>
                            )}
                          </div>
                          {testimonial.link && (
                            <a
                              href={testimonial.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-500 transition-colors flex-shrink-0"
                              aria-label={`View ${testimonial.name}'s profile`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>

          {/* Link to Skillmate Profile */}
          <div className="text-center mt-10">
            <a
              href="https://skillmate.ai/sathish"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-400 transition-colors"
            >
              <span>View more testimonials on</span>
              <span className="font-semibold text-blue-400">Skillmate</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

