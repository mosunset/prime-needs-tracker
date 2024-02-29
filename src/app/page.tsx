"use client";
import { useAuth } from "@/context/auth";
import { login, logout } from "@/libs/auth";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const user = useAuth();
    const [waiting, setWaiting] = useState<boolean>(false);

    const signIn = () => {
        setWaiting(true);

        login()
            .catch((error) => {
                console.error(error?.code);
            })
            .finally(() => {
                setWaiting(false);
            });
    };

    const button_class =
        "py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";
    return (
        <>
            <div>
                {user ? (
                    <>
                        <Image
                            src={user.profilePictureUrl as string}
                            alt="User Icon"
                            className="w-8 h-8 rounded-full"
                            width={50}
                            height={50}
                            // unoptimized={true}
                        />
                        <p className="text-xl font-bold">{user.name || "名無しさん"}</p>
                    </>
                ) : (
                    <>
                        <span className="relative inline-block border border-black w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            <div className="absolute w-4 h-4 bg-gray-600 rounded-full"></div>
                            <div className="absolute w-5 h-5 bg-gray-600 rounded-full top-1/2 "></div>
                        </span>
                        <p className="text-xl font-bold">名無しさん</p>
                    </>
                )}
                {user === null && !waiting && (
                    <button className={button_class} type="button" onClick={signIn}>
                        ログイン
                    </button>
                )}
                {user && (
                    <button className={button_class} type="button" onClick={logout}>
                        ログアウト
                    </button>
                )}
            </div>
        </>
    );
}
