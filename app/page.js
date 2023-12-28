import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started!
      </h1>
      <section>
        <h2 style={{ color: "white", textAlign: "center" }}>
          <Link href={"/meals"}>Meals Page</Link>
        </h2>
        <h2 style={{ color: "white", textAlign: "center" }}>
          <Link href={"/meals/share"}>Share Page</Link>
        </h2>
        <h2 style={{ color: "white", textAlign: "center" }}>
          <Link href={"/meals/testpage"}>Slug Page</Link>
        </h2>
        <h2
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <Link href={"/community"}>Community Page</Link>
        </h2>
      </section>
    </main>
  );
}
