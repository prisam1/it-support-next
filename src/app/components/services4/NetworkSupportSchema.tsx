import { networkSupportSchemas } from "@/app/schemas/networkSupportSchema";
import Script from "next/script";  

export default function HomeSchema() {
  return (
    <>
      {networkSupportSchemas.map((schema, i) => (
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
