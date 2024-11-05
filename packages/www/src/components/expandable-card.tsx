"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

interface ExpandableCardProps {
  title?: string;
  summary: React.ReactNode;
  fullContent: React.ReactNode;
  footer?: React.ReactNode;
}

export function ExpandableCard({
  title,
  summary,
  fullContent,
  footer,
}: ExpandableCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="rounded-xl text-left outline-primary">
          <Card className="w-full max-w-md cursor-pointer group transition-all duration-300 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1">
            <CardHeader>
              {title && (
                <CardTitle className="text-white group-hover:text-[#5CFFE1] transition-colors">
                  {title}
                </CardTitle>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-white/80">{summary}</p>
            </CardContent>
            {footer && <CardFooter>{footer}</CardFooter>}
            <div className="absolute bottom-4 right-4 text-white/60 group-hover:text-[#5CFFE1] transition-colors">
              <ChevronDown className="w-5 h-5" />
            </div>
          </Card>
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 bg-slate-950/95 z-50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild>
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center"
                initial={{ scale: 0.5, y: 100, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.5, y: 100, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: 0.1,
                }}
              >
                <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-md border-white/20">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      {title && (
                        <Dialog.Title asChild>
                          <CardTitle className="text-[#5CFFE1] text-2xl">
                            {title}
                          </CardTitle>
                        </Dialog.Title>
                      )}
                      <Dialog.Close asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-white/60 hover:text-white"
                        >
                          <X className="h-4 w-4" />
                          <span className="sr-only">Close</span>
                        </Button>
                      </Dialog.Close>
                    </div>
                  </CardHeader>
                  <CardContent className="text-white/90">
                    {fullContent}
                  </CardContent>
                  {footer && <CardFooter>{footer}</CardFooter>}
                </Card>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
