import { useQuery } from "@tanstack/react-query";
import SectionInfo from "./SectionInfo";
import Card from "./card/Card";
import Loader from "./shared/Loader";

const desc = `the majority have suffered alteration in some form, by injected humour,
or randomized words which don't look even slightly believable.`;

const Services = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const response = await fetch("/services.json");
      const data = await response.json();
      return data;
    },
  });
  return (
    <section className="py-28 space-y-12">
      <div className="text-center space-y-5">
        {
          <SectionInfo
            heading="Service"
            title="Our Service Area"
            desc={desc}
            descCSS="max-w-[717px] mx-auto"
          />
        }
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((data) => (
            <Card key={data._id} data={data} cardType="services" />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
