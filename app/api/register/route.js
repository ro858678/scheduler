import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../lib/mongodb";
import bcript from "bcryptjs";
import User from "@/models/user";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();
        const hashedPassword = await bcript.hash(password, 10); 
       await connectMongoDB();
       await User.create({ name, email, password: hashedPassword });

        return  NextResponse.json({ message: "User register"} 
        ,{ ststus: 201});
    } catch (error) {
        return NextResponse.json({message: "An error occuered"}
            ,{ status: 500}
        );
    }
}