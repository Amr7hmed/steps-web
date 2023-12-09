import setLocaleCookie from "@/lib/set-locale-cookie";
import { useRouter } from "next/router";
import { useCallback } from "react";

function useChangeLocale() {
  const router = useRouter();
  const changeLocale = useCallback(
    (locale: string) => {
      if (locale !== router.locale) {
        setLocaleCookie(locale);
        router.reload();
      }
    },
    [router]
  );

  return { changeLocale };
}

export default useChangeLocale;
