import { tierTwoSchemas } from "@/app/schemas/tier-2-schema";
import Script from "next/script";  

export default function HomeSchema() {
  return (
    <>
      {tierTwoSchemas.map((schema, i) => (
        <Script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
