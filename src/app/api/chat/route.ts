import { NextResponse } from "next/server";
import { client } from "@/openai/client";


export const POST = async (req: Request) => {
    try {
        const { prompt } = await req.json()

        const response = await client.chat.completions.create({
            model: process.env.LLM_MODEL || "",
            messages: [
                {
                    role: "system",
                    content: ""
                },
                {
                    role: "user",
                    content: prompt
                }
            ]
        })

        const reply = response.choices[0].message.content;

        return NextResponse.json({ reply })

    } catch (error) {
        console.error("LLM Error: ", error);
        return NextResponse.json({
            error: "Failed to get ai response",
        },
            {
                status: 500
            })
    }
}