
"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    TbArrowUp,
    TbBrain,
    TbCheck,
    TbChevronRight,
    TbSparkles,
    TbX,
} from "react-icons/tb";

const QUICK_PROMPTS = [
    {
        label: "What does he do?",
        prompt: "What does Godswill do?",
    },
    {
        label: "View his projects",
        prompt: "Tell me about Godswill's projects.",
    },
    {
        label: "His tech stack",
        prompt: "What technologies does Godswill use?",
    },
    {
        label: "How can I hire him?",
        prompt: "How can I hire Godswill?",
    },
];

const INITIAL_MESSAGE = {
    id: "welcome",
    role: "assistant",
    content:
        "Hi 👋 I'm Will AI. Ask me about Godswill's work, skills, projects, or how to work with him.",
};

export default function Assistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [isTyping, setIsTyping] = useState(false);

    const inputRef = useRef(null);
    const messagesRef = useRef(null);

    /*
     * ---------------------------------------------------------
     * OPEN ASSISTANT FROM INTERACTIVE SPHERE
     * ---------------------------------------------------------
     */
    useEffect(() => {
        const openAssistant = () => {
            setIsOpen(true);
        };

        window.addEventListener("open-will-ai", openAssistant);

        return () => {
            window.removeEventListener(
                "open-will-ai",
                openAssistant
            );
        };
    }, []);

    /*
     * ---------------------------------------------------------
     * FOCUS INPUT WHEN ASSISTANT OPENS
     * ---------------------------------------------------------
     */
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 250);

        return () => clearTimeout(timer);
    }, [isOpen]);

    /*
     * ---------------------------------------------------------
     * AUTO SCROLL CHAT
     * ---------------------------------------------------------
     */
    useEffect(() => {
        if (!messagesRef.current) return;

        messagesRef.current.scrollTo({
            top: messagesRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, isTyping]);

    /*
     * ---------------------------------------------------------
     * SEND MESSAGE TO WILL AI API
     * ---------------------------------------------------------
     */
    const sendMessage = async (messageText = input) => {
        const trimmedMessage = messageText.trim();

        if (!trimmedMessage || isTyping) return;

        const userMessage = {
            id: `${Date.now()}-user`,
            role: "user",
            content: trimmedMessage,
        };

        setMessages((current) => [
            ...current,
            userMessage,
        ]);

        setInput("");
        setIsTyping(true);

        try {
            const response = await fetch("/api/assistant", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: trimmedMessage,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data?.error || "Will AI request failed."
                );
            }

            const assistantMessage = {
                id: `${Date.now()}-assistant`,
                role: "assistant",
                content:
                    data?.reply ||
                    "I couldn't generate a response right now. Please try again.",
            };

            setMessages((current) => [
                ...current,
                assistantMessage,
            ]);
        } catch (error) {
            console.error("Will AI request error:", error);

            const errorMessage = {
                id: `${Date.now()}-error`,
                role: "assistant",
                content:
                    "Sorry, I'm having trouble connecting right now. Please try again in a moment.",
            };

            setMessages((current) => [
                ...current,
                errorMessage,
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    /*
     * ---------------------------------------------------------
     * FORM SUBMIT
     * ---------------------------------------------------------
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        sendMessage();
    };

    /*
     * ---------------------------------------------------------
     * ENTER TO SEND
     * ---------------------------------------------------------
     */
    const handleKeyDown = (event) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    };

    /*
     * ---------------------------------------------------------
     * CLEAR CONVERSATION
     * ---------------------------------------------------------
     */
    const clearConversation = () => {
        if (isTyping) return;

        setMessages([INITIAL_MESSAGE]);
        setInput("");
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* BACKDROP */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setIsOpen(false)}
                        className="
                            fixed
                            inset-0
                            z-[9990]
                            bg-black/20
                            backdrop-blur-[2px]
                        "
                    />

                    {/* ASSISTANT WINDOW */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 24,
                            scale: 0.96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 24,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            fixed
                            z-[9995]
                            bottom-5
                            right-5
                            w-[calc(100vw-32px)]
                            max-w-[420px]
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-black/[0.08]
                            bg-white/[0.94]
                            shadow-[0_30px_100px_rgba(0,0,0,0.22)]
                            backdrop-blur-2xl
                            dark:border-white/[0.09]
                            dark:bg-[#080808]/[0.96]
                            dark:shadow-[0_30px_100px_rgba(0,0,0,0.55)]
                        "
                    >
                        {/* HEADER */}
                        <div
                            className="
                                border-b
                                border-black/[0.07]
                                px-5
                                py-4
                                dark:border-white/[0.08]
                            "
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    {/* AI ICON */}
                                    <div
                                        className="
                                            relative
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-black/[0.08]
                                            bg-black
                                            text-white
                                            dark:border-white/[0.1]
                                            dark:bg-white
                                            dark:text-black
                                        "
                                    >
                                        <TbBrain size={19} />

                                        <span
                                            className="
                                                absolute
                                                -right-0.5
                                                -top-0.5
                                                h-2.5
                                                w-2.5
                                                rounded-full
                                                border-2
                                                border-white
                                                bg-green-500
                                                dark:border-[#080808]
                                            "
                                        />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h3
                                                className="
                                                    text-[14px]
                                                    font-semibold
                                                    tracking-[-0.02em]
                                                    text-black
                                                    dark:text-white
                                                "
                                            >
                                                Will AI
                                            </h3>

                                            <span
                                                className="
                                                    rounded-full
                                                    border
                                                    border-black/[0.08]
                                                    px-1.5
                                                    py-0.5
                                                    text-[9px]
                                                    font-medium
                                                    uppercase
                                                    tracking-[0.12em]
                                                    text-black/45
                                                    dark:border-white/[0.1]
                                                    dark:text-white/40
                                                "
                                            >
                                                AI
                                            </span>
                                        </div>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[11px]
                                                text-black/45
                                                dark:text-white/40
                                            "
                                        >
                                            Godswill's portfolio assistant
                                        </p>
                                    </div>
                                </div>

                                {/* HEADER ACTIONS */}
                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        onClick={clearConversation}
                                        aria-label="Clear conversation"
                                        disabled={isTyping}
                                        className="
                                            rounded-xl
                                            px-2.5
                                            py-2
                                            text-[10px]
                                            font-medium
                                            text-black/45
                                            transition
                                            hover:bg-black/[0.05]
                                            hover:text-black
                                            disabled:cursor-not-allowed
                                            disabled:opacity-30
                                            dark:text-white/40
                                            dark:hover:bg-white/[0.06]
                                            dark:hover:text-white
                                        "
                                    >
                                        Clear
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        aria-label="Close Will AI"
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            items-center
                                            justify-center
                                            rounded-xl
                                            text-black/50
                                            transition
                                            hover:bg-black/[0.05]
                                            hover:text-black
                                            dark:text-white/45
                                            dark:hover:bg-white/[0.07]
                                            dark:hover:text-white
                                        "
                                    >
                                        <TbX size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* MESSAGES */}
                        <div
                            ref={messagesRef}
                            className="
                                h-[390px]
                                overflow-y-auto
                                px-4
                                py-5
                                scrollbar-thin
                            "
                        >
                            <div className="space-y-4">
                                {messages.map((message) => {
                                    const isUser =
                                        message.role === "user";

                                    return (
                                        <motion.div
                                            key={message.id}
                                            initial={{
                                                opacity: 0,
                                                y: 8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className={`flex ${
                                                isUser
                                                    ? "justify-end"
                                                    : "justify-start"
                                            }`}
                                        >
                                            <div
                                                className={`
                                                    max-w-[84%]
                                                    rounded-2xl
                                                    px-4
                                                    py-3
                                                    text-[13px]
                                                    leading-6
                                                    ${
                                                        isUser
                                                            ? "rounded-br-md bg-black text-white dark:bg-white dark:text-black"
                                                            : "rounded-bl-md border border-black/[0.07] bg-black/[0.035] text-black/75 dark:border-white/[0.08] dark:bg-white/[0.045] dark:text-white/75"
                                                    }
                                                `}
                                            >
                                                {message.content}
                                            </div>
                                        </motion.div>
                                    );
                                })}

                                {/* TYPING INDICATOR */}
                                <AnimatePresence>
                                    {isTyping && (
                                        <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 8,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 8,
                                            }}
                                            className="flex justify-start"
                                        >
                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    gap-1.5
                                                    rounded-2xl
                                                    rounded-bl-md
                                                    border
                                                    border-black/[0.07]
                                                    bg-black/[0.035]
                                                    px-4
                                                    py-3
                                                    dark:border-white/[0.08]
                                                    dark:bg-white/[0.045]
                                                "
                                            >
                                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/45 [animation-delay:-0.2s] dark:bg-white/45" />
                                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/45 [animation-delay:-0.1s] dark:bg-white/45" />
                                                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/45 dark:bg-white/45" />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* QUICK QUESTIONS */}
                        <div
                            className="
                                border-t
                                border-black/[0.07]
                                px-4
                                pt-3
                                dark:border-white/[0.08]
                            "
                        >
                            <div
                                className="
                                    mb-2
                                    flex
                                    items-center
                                    gap-1.5
                                    text-[10px]
                                    font-medium
                                    uppercase
                                    tracking-[0.12em]
                                    text-black/35
                                    dark:text-white/30
                                "
                            >
                                <TbSparkles size={12} />
                                Quick questions
                            </div>

                            <div
                                className="
                                    flex
                                    gap-2
                                    overflow-x-auto
                                    pb-3
                                    scrollbar-none
                                "
                            >
                                {QUICK_PROMPTS.map((item) => (
                                    <button
                                        key={item.label}
                                        type="button"
                                        disabled={isTyping}
                                        onClick={() =>
                                            sendMessage(item.prompt)
                                        }
                                        className="
                                            flex
                                            shrink-0
                                            items-center
                                            gap-1
                                            rounded-full
                                            border
                                            border-black/[0.08]
                                            bg-white
                                            px-3
                                            py-2
                                            text-[10px]
                                            font-medium
                                            text-black/65
                                            transition
                                            hover:border-black/20
                                            hover:bg-black/[0.035]
                                            disabled:cursor-not-allowed
                                            disabled:opacity-40
                                            dark:border-white/[0.1]
                                            dark:bg-white/[0.04]
                                            dark:text-white/60
                                            dark:hover:border-white/20
                                            dark:hover:bg-white/[0.07]
                                        "
                                    >
                                        {item.label}
                                        <TbChevronRight size={12} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* INPUT */}
                        <div className="px-4 pb-4">
                            <form
                                onSubmit={handleSubmit}
                                className="
                                    flex
                                    items-end
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-black/[0.09]
                                    bg-black/[0.025]
                                    p-2
                                    transition
                                    focus-within:border-black/20
                                    focus-within:bg-black/[0.04]
                                    dark:border-white/[0.1]
                                    dark:bg-white/[0.035]
                                    dark:focus-within:border-white/20
                                    dark:focus-within:bg-white/[0.055]
                                "
                            >
                                <textarea
                                    ref={inputRef}
                                    value={input}
                                    onChange={(event) =>
                                        setInput(event.target.value)
                                    }
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask me anything about Godswill..."
                                    rows={1}
                                    maxLength={500}
                                    className="
                                        max-h-24
                                        min-h-[38px]
                                        flex-1
                                        resize-none
                                        bg-transparent
                                        px-2
                                        py-2
                                        text-[12px]
                                        leading-5
                                        text-black
                                        outline-none
                                        placeholder:text-black/30
                                        dark:text-white
                                        dark:placeholder:text-white/25
                                    "
                                />

                                <button
                                    type="submit"
                                    disabled={!input.trim() || isTyping}
                                    aria-label="Send message"
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-black
                                        text-white
                                        transition
                                        hover:scale-[1.03]
                                        hover:bg-black/90
                                        disabled:cursor-not-allowed
                                        disabled:opacity-25
                                        dark:bg-white
                                        dark:text-black
                                    "
                                >
                                    <TbArrowUp size={17} />
                                </button>
                            </form>

                            <div
                                className="
                                    mt-2
                                    flex
                                    items-center
                                    justify-between
                                    px-1
                                "
                            >
                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-1.5
                                        text-[9px]
                                        text-black/30
                                        dark:text-white/25
                                    "
                                >
                                    <TbCheck size={11} />
                                    Portfolio information only
                                </div>

                                <span
                                    className="
                                        text-[9px]
                                        text-black/25
                                        dark:text-white/20
                                    "
                                >
                                    Enter ↵
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

