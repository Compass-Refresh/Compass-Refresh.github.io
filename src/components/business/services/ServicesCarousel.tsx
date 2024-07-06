import { Carousel } from "@/components/ui/carousel/Carousel";
import { EXAMPLE_WORK } from "@/server/example-work";

export function ServicesCarousel() {
  return (
    <section className="border-t-2 border-cyan-950 bg-cyan-900 py-4">
      <h2 className="px-2 py-4 text-xl font-semibold text-white drop-shadow-2xl">
        {EXAMPLE_WORK.heading}
      </h2>
      <p className="px-2 pb-4 text-sm text-white">{EXAMPLE_WORK.body}</p>
      <Carousel
        options={{ loop: true, align: "center" }}
        slides={EXAMPLE_WORK.images.map((image) => ({
          key: image.src,
          component: (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="rounded-bl-3xl rounded-tr-3xl bg-cyan-950 p-1.5 shadow"
              src={image.src}
              alt="image"
            />
          ),
        }))}
      />
    </section>
  );
}
