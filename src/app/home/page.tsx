"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [name, setName] = useState("");
  const router = useRouter();

  // ✅ Se já tem nome salvo, redireciona automaticamente pra /app
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (storedName) {
      router.push("/app");
    }
  }, [router]);

  const handleContinue = () => {
    if (!name.trim()) return;
    localStorage.setItem("username", name.trim());
    router.push("/app");
  };

  return (
    <div className="w-screen h-screen flex flex-col gap-20 mt-40 items-center">
      <div className="text-center">
        <p className="font-playfair text-6xl">
          To do in <span className="font-medium underline">Silence</span>
        </p>
        <p className="font-playfair">
          A simple to do list, for your simple life.
        </p>
      </div>
      <div className="space-y-2">
        <p className="font-medium">Insert your name for a better experience</p>
        <div className="flex gap-2">
          <Input
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />
          <Button onClick={handleContinue}>
            Continue <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
