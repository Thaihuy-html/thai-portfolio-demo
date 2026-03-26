import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="pt-40 flex justify-center items-center min-h-screen bg-[#0a1628]">
      <SignIn 
        routing="path" 
        path="/sign-in" 
        signUpUrl="/sign-up"
        forceRedirectUrl="/admin/editor" // Sau khi đăng nhập xong sẽ nhảy vào đây
      />
    </div>
  );
}