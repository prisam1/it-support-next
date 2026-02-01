import { cloudSupportSchemas } from "@/app/schemas/cloudSupportSchema"; 
import Script from "next/script";  

export default function HomeSchema() {
  return (
    <>
      {cloudSupportSchemas.map((schema, i) => (
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
