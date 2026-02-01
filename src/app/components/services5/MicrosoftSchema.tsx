import { microsoftSchemas } from "@/app/schemas/microsoftSchema"; 
import Script from "next/script";  

export default function HomeSchema() {
  return (
    <>
      {microsoftSchemas.map((schema, i) => (
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
