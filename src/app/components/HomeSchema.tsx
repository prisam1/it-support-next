import Script from "next/script"; 
import { homeSchemas } from "../schemas/homeSchema";

export default function HomeSchema() {
  return (
    <>
      {homeSchemas.map((schema, i) => (
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
