"use client";

import { createCredential } from "@/actions/credentials";
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
import {
  createCredentialSchema,
  createCredentialSchemaType,
} from "@/schema/credential";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Layers2Icon, Loader2, Mic, MicOff } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function CreateCredentialDialog({ triggeredText }: { triggeredText?: string }) {
  const [open, setOpen] = useState(false);
  const [isListeningName, setIsListeningName] = useState(false);
  const [isListeningValue, setIsListeningValue] = useState(false);

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

  const form = useForm<createCredentialSchemaType>({
    resolver: zodResolver(createCredentialSchema),
    defaultValues: {},
  });
  const { mutate, isPending } = useMutation({
    mutationFn: createCredential,
    onSuccess: () => {
      toast.success("Credential created", { id: "create-credential" });
      setOpen(false);
    },
    onError: (error: any) => {
      toast.error("Failed to create credential", { id: "create-credential" });
    },
  });

  const onSubmit = useCallback(
    (values: createCredentialSchemaType) => {
      toast.loading("Creating credential...", { id: "create-credential" });
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
        <Button>{triggeredText ?? "Create credential"}</Button>
      </DialogTrigger>
      <DialogContent className="px-0">
        <CustomDialogHeader icon={Layers2Icon} title="Create Credential" />
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
                      Enter an unique and descriptive name for credential <br />
                      This name will be used to identify credential
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
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
                          onClick={() => toggleListening(field, isListeningValue, setIsListeningValue)}
                          className={`absolute top-2 right-2 p-1 rounded-md hover:bg-muted ${isListeningValue ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}
                          title="Use Speech to Text"
                        >
                          {isListeningValue ? <MicOff size={14} /> : <Mic size={14} />}
                        </button>
                      </div>
                    </FormControl>
                    <FormDescription>
                      Enter the value assosiated with this credential <br />
                      This value wiil be securely encrypted and stored
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

export default CreateCredentialDialog;
