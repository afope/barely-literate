import { AuthForm } from "@/components/auth/auth-form";

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      <AuthForm />
    </div>
  );
}
