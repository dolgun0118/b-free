/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

type LoginInfo = {
  id: string;
  password: string;
};

export default function Home() {
  const { formState, register, handleSubmit } = useForm<LoginInfo>({
    defaultValues: { id: "", password: "" },
  });

  const router = useRouter();

  const onSubmit = (data: LoginInfo) => {
    if (data.id && data.password) router.push("home");
  };

  return (
    <>
      <h1 className="text-5xl text-center text-indigo-500 mb-4">B-Free</h1>
      <form
        className="flex flex-col gap-4 p-8 w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <Label>아이디</Label>
          <Input {...register("id", { required: "아이디를 입력해주세요" })} />
          {formState.errors.id && (
            <p className="text-sm text-red-500 mt-1">
              {formState.errors.id.message}
            </p>
          )}
        </div>
        <div>
          <Label>비밀번호</Label>
          <Input
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
            })}
          />
          {formState.errors.password && (
            <p className="text-sm text-red-500 mt-1">
              {formState.errors.password.message}
            </p>
          )}
        </div>
        <Button type="submit"> 로그인 </Button>
      </form>
      <i className="text-gray-700">provided by dolgun0118</i>
    </>
  );
}
