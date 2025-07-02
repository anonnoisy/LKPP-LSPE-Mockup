import type { User } from "@/data";
import { useAuth } from "@/lib/providers/auth-provider";
import { useNavigate, useRouter, useRouterState, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import z from "zod";

export const userSchema = z.object({
  userName: z.string().min(1, "Username wajib diisi"),
  realName: z.string().min(1, "Nama asli wajib diisi"),
  phone: z.string().min(8, "Nomor HP tidak valid"),
  role: z.enum(["PP", "Admin", "User"]),
  lpseId: z.string().min(1, "LPSE ID wajib diisi"),
  email: z.string().email("Email tidak valid"),
  idInstansi: z.string().min(1, "ID Instansi wajib diisi"),
  namaInstansi: z.string().min(1, "Nama Instansi wajib diisi"),
  idSatker: z.string().min(1, "ID Satker wajib diisi"),
  namaSatker: z.string().min(1, "Nama Satker wajib diisi"),
  idBidang: z.string({ required_error: "ID Bidang wajib diisi" }).optional(),
  bidang: z.string({ required_error: "Nama Bidang wajib diisi" }).optional(),
});

export const useSignInForm = (defaultUser?: User) => {
  const auth = useAuth();
  const router = useRouter();
  const isLoading = useRouterState({ select: (s) => s.isLoading });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const search = useSearch({ from: "/" });

  const [user, setUser] = useState(
    defaultUser
      ? defaultUser
      : {
          userName: "",
          realName: "",
          phone: "",
          role: "PP",
          lpseId: "",
          isLatihan: false,
          email: "",
          time: new Date().toISOString(),
          idInstansi: "",
          namaInstansi: "",
          idSatker: "",
          namaSatker: "",
          idBidang: "",
          bidang: "",
        }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSetUser = (user?: User) => {
    if (user) {
      setUser(user);
    }
  };

  const onFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    try {
      evt.preventDefault();
      const validated = userSchema.safeParse(user);

      if (!validated.success) {
        console.log(validated.error);

        setIsSubmitting(false);
      } else {
        await auth.login({
          ...validated.data,
          isLatihan: false,
          time: new Date().toISOString(),
        });

        await router.invalidate();

        await new Promise((resolve) => setTimeout(resolve, 100));

        await navigate({ to: search.redirect || "/app" });
      }
    } catch (error) {
      console.error("Error logging in: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoggingIn = isLoading || isSubmitting;

  return { user, handleSetUser, handleChange, onFormSubmit, isLoggingIn };
};
