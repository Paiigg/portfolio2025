import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const AvatarSection = () => {
  return (
    <div className="w-full  flex items-center flex-col gap-4 ">
      <Avatar className="size-40">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p className="text-xs">Connect with me!</p>
      <div className=" w-[70%] grid grid-cols-1 gap-4">
        <Button
          asChild
          className="w-full justify-start bg-[#0A66C2] text-foreground hover:scale-105 hover:bg-[#0A66C2]/90"
        >
          <Link
            href="https://www.linkedin.com/in/faiqul-washfi/"
            target="_blank"
          >
            <FaLinkedinIn className="size-5" />
            LinkedIn
          </Link>
        </Button>
        <Button
          asChild
          className="w-full justify-start bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-foreground hover:scale-105"
        >
          <Link href="/">
            <FaInstagram className="size-5" />
            Instagram
          </Link>
        </Button>
        <Button
          asChild
          className="w-full justify-start bg-[#010101] text-foreground hover:bg-[#010101]/30 hover:scale-105"
        >
          <Link href="https://github.com/Paiigg" target="_blank">
            <FaGithub className="size-5" />
            Github
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default AvatarSection;
