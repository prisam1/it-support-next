import { tierOneSchemas } from "@/app/schemas/tier-1-schema";
import Script from "next/script";  

export default function HomeSchema() {
  return (
    <>
      {tierOneSchemas.map((schema, i) => (
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
