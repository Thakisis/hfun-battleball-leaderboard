import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-switcher";
import { TextEffect } from "@/components/ui/text-effect";
import { Menu, ArrowRight, Home, Globe, MessageCircle } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";

export function PageHeader() {
    return (
        <header className="w-full bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="https://hfun.info" target="_blank" rel="noopener noreferrer">
                    <TextEffect per='char' preset='blur' className="text-3xl font-bold cursor-pointer">
                        HFUN Leaderboard
                    </TextEffect>
                </Link>
                <div className="flex items-center space-x-2">
                    <Badge variant="default" className="mr-2">Beta</Badge>
                    <ModeToggle />
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-4 w-4" />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <div className="mx-auto w-full max-w-sm">
                                <div className="flex flex-col items-stretch p-4 space-y-4">
                                    <Link href="https://hfun.info" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button variant="ghost" className="w-full justify-between">
                                            <span className="flex items-center">
                                                <Home className="mr-2 h-4 w-4" />
                                                Home
                                            </span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="https://habbofun.org" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button variant="ghost" className="w-full justify-between">
                                            <span className="flex items-center">
                                                <Globe className="mr-2 h-4 w-4" />
                                                Website
                                            </span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="https://discord.gg/originses" target="_blank" rel="noopener noreferrer" className="w-full">
                                        <Button variant="ghost" className="w-full justify-between">
                                            <span className="flex items-center">
                                                <MessageCircle className="mr-2 h-4 w-4" />
                                                Discord
                                            </span>
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <DrawerClose asChild>
                                        <Button variant="outline" className="w-full mt-4">Close</Button>
                                    </DrawerClose>
                                </div>
                            </div>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </header>
    );
}