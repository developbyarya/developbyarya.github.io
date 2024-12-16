import { Icons } from "@/assets/icons-custom";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import { Separator } from "../ui/separator";
import profile from "@/assets/profile.jpg";

const DATA = {
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/developbyarya",
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/gradiva-arya",
        icon: Icons.linkedin,
      },
      email: {
        name: "Send Email",
        url: "mailto: developbyarya@gmail.com",
        icon: Icons.email,
      },
    },
  },
};

export default function TopHeader() {
  return (
    <div className="flex items-center">
      <Avatar className="md:w-32 w-20 h-auto">
        <AvatarImage src={profile} className={cn("object-cover")} />
        <AvatarFallback>GA</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <h1 className="md:text-2xl text-lg font-bold">
          Hi, I'm Gradiva. Backend focus Software Engineer with 3+ Years
          Experience{" "}
        </h1>
        <div className="flex gap-2 items-center">
          <TooltipProvider>
            <Dock direction="middle">
              {Object.entries(DATA.contact.social).map(([name, social]) => (
                <DockIcon key={name} distance={0} magnification={5}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a
                        href={social.url}
                        target="_blank"
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "size-12 rounded-full"
                        )}
                      >
                        <social.icon className="size-4" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}

              <Separator orientation="vertical"></Separator>
              <DockIcon>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={"/resume-gradiva.pdf"}
                      target="_blank"
                      aria-label={"Gradiva's resume"}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "icon" }),
                        "size-12 rounded-full"
                      )}
                    >
                      <Icons.download />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download resume</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            </Dock>
          </TooltipProvider>
        </div>
        <Separator className="my-4" />
      </div>
    </div>
  );
}
