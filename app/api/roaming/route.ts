import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    try {
        // Query the database to get the first four songs
        const songs = await prisma.song.findMany({
            skip: 12,
            take: 12, 
        });
        return NextResponse.json({ message: songs }, { status: 200 });
    } catch (error) {
        console.error("Error fetching songs from the database:", error);
        return NextResponse.json({ message: "Error fetching songs" }, { status: 500 });
    }
}