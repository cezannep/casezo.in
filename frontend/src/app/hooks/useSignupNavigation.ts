import { useRouter } from "next/navigation";

interface Props {
  type: "user" | "advocate";
}
export function useSignupNavigation() {
  const router = useRouter();
  const handleSignup = ({ type }: Props) => {
    if (type === "user") {
      router.push("/user-signup");
    } else {
      router.push("/advocate-signup");
    }
  };
  return handleSignup;
}
