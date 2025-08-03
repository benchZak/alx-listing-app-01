import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  const property = PROPERTYLISTINGSAMPLE.find(
    (item) => item.id === id
  );

  if (!property) return <div className="p-8">Property not found</div>;

  return <PropertyDetail property={property} />;
}
