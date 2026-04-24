"use client";

import { duplicateWorkflow } from "@/actions/workflows";
import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  duplicateWorkflowSchema,
  duplicateWorkflowSchemaType,
} from "@/schema/workflows";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CopyIcon, Layers2Icon, Loader2, Mic, MicOff } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function DuplicateWorkflowDialog({
  workflowId,
  name,
  description,
}: {
  workflowId: string;
  name: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const [isListeningName, setIsListeningName] = useState(false);
  const [isListeningDesc, setIsListeningDesc] = useState(false);

  // 🎤 GOOGLE SPEECH INTEGRATION
  const toggleListening = useCallback((field: any, listeningState: boolean, setListeningState: (val: boolean) => void) => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    if (listeningState) {
      setListeningState(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setListeningState(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      field.onChange(field.value ? `${field.value} ${transcript}` : transcript);
    };
    recognition.onerror = () => setListeningState(false);
    recognition.onend = () => setListeningState(false);

    recognition.start();
  }, []);

  const form = useForm<duplicateWorkflowSchemaType>({
    resolver: zodResolver(duplicateWorkflowSchema),
    defaultValues: {
      workflowId,
      name: name ? name + "-copy" : "",
      description,
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: duplicateWorkflow,
    onSuccess: () => {
      toast.success("Workflow duplicated", { id: "duplicate-workflow" });
      setOpen((prev) => !prev);
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to duplicate", {
        id: "duplicate-workflow",
      });
    },
  });

  const onSubmit = useCallback(
    (values: duplicateWorkflowSchemaType) => {
      toast.loading("Duplicating workflow...", { id: "duplicate-workflow" });
      mutate(values);
    },
    [mutate]
  );

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        form.reset();
        setOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          size={"icon"}
          className={cn(
            "ml-2 transition-opacity duration-200 opacity-0 group-hover/card:opacity-100"
          )}
        >
          <CopyIcon className="w-4 h-4 text-muted-foreground cursor-pointer" />
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader icon={Layers2Icon} title="Duplicate workflow" />
        <div className="p-6">
          <Form {...form}>
            <form
              className="space-y-8 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Name <p className="text-xs text-primary">(required)</p>
                    </FormLabel>
                    <FormControl>
                      <div className="relative flex items-center">
                        <Input {...field} className="pr-8" />
                        <button
                          type="button"
                          onClick={() => toggleListening(field, isListeningName, setIsListeningName)}
                          className={`absolute right-2 p-1 rounded-md hover:bg-muted ${isListeningName ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}
                          title="Use Speech to Text"
                        >
                          {isListeningName ? <MicOff size={14} /> : <Mic size={14} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Choose a descriptive and a unique name
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex gap-1 items-center">
                      Description{" "}
                      <p className="text-xs text-muted-foreground">
                        (optinoal)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Textarea {...field} className="resize-none pr-8" />
                        <button
                          type="button"
                          onClick={() => toggleListening(field, isListeningDesc, setIsListeningDesc)}
                          className={`absolute top-2 right-2 p-1 rounded-md hover:bg-muted ${isListeningDesc ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}
                          title="Use Speech to Text"
                        >
                          {isListeningDesc ? <MicOff size={14} /> : <Mic size={14} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Provide a brief description of what your workflow does.
                      <br /> This is optional but can help you remember the
                      workflow&apos;s purpose
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isPending}>
                {!isPending ? "Proceed" : <Loader2 className="animate-spin" />}
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DuplicateWorkflowDialog;
