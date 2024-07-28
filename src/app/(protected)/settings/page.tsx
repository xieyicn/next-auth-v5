import { auth, signOut } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div>
      <p>{JSON.stringify(session)}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">signout</button>
      </form>
    </div>
  );
}
