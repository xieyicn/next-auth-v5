import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-blue-500">
      <div className="space-y-6 text-center">
        <h1 className="text-5xl text-white text-semibold drop-shadow-md">
          Auth
        </h1>
        <p className="text-white">a simple authenticaiont service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
