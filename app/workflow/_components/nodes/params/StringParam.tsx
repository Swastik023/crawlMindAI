"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ParamProps } from "@/lib/types";
import React, { useEffect, useId, useState, useCallback } from "react";
import { Mic, MicOff } from "lucide-react";

function StringParam({
  param,
  value,
  updateNodeParamValue,
  disabled,
}: ParamProps) {
  const id = useId();
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const [isListening, setIsListening] = useState(false);

  // 🎤 GOOGLE SPEECH INTEGRATION
  const toggleListening = useCallback(() => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }
    
    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      const newValue = internalValue ? `${internalValue} ${transcript}` : transcript;
      setInternalValue(newValue);
      if (updateNodeParamValue) {
        updateNodeParamValue(newValue);
      }
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  }, [internalValue, isListening, updateNodeParamValue]);

  let InputComponent: any = Input;
  if (param.variant === "textarea") InputComponent = Textarea;

  return (
    <div className="space-y-1 p1- w-full">
      <Label htmlFor={id} className="text-xs flex">
        {param.name}
        {param.required && <p className="text-red-400 px-2">*</p>}
      </Label>
      <div className="relative flex items-center">
        <InputComponent
          id={id}
          className="text-xs pr-8"
          value={internalValue}
          placeholder="Enter value here"
          onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateNodeParamValue && updateNodeParamValue(e.target.value)
          }
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInternalValue(e.target.value)
          }
          disabled={disabled}
        />
        <button
          type="button"
          onClick={toggleListening}
          className={`absolute right-2 p-1 rounded-md hover:bg-muted ${isListening ? 'text-red-500 animate-pulse' : 'text-muted-foreground'}`}
          title="Use Speech to Text"
        >
          {isListening ? <MicOff size={14} /> : <Mic size={14} />}
        </button>
      </div>
      {param.helperText && (
        <p className="text-muted-foreground px-2">{param.helperText}</p>
      )}
    </div>
  );
}

export default StringParam;
