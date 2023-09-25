'use client'

import Link from "next/link";
import Image from "next/image";

function Error() {
    return (
        <section className="flex flex-col container">
            <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
                Ops, ocorreu um erro ao exibir esse país!
            </h1>
            <Link 
            href="/"
            className="flex items-center py-2">
                <Image
                    src="/arrow-back.svg"
                    alt="Icone de seta de voltar"
                    width="24"
                    height="24"
                />
                Voltar
            </Link>
        </section>
    );
}

export default Error;