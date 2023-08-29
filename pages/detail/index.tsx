/* eslint-disable @next/next/no-img-element */

import Head from "next/head";
import Link from "next/link";


export default function Ellaei() {


    return (
        <>
            <Head>
                <title>Ellaei</title>
                <meta name="description" content="LIYAT Remodeling and Restoration" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="pt-10">

                <section className="bg-gray-100">
                    <div className="mx-auto max-w-7xl">
                        <div className="py-16 px-5 md:px-0">
                            <div className="md:flex md:items-center md:space-x-10">
                                <div className="w-full md:w-1/2">
                                    <img src="./minerals/m1.avif" alt=""
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="w-full md:w-1/2">
                                    <h1 className="py-3 text-xl md:text-6xl font-bold">
                                        Lorem Ipsum Doler</h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the {"industry's"} standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the {"industry's"} standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>
                                    <div>
                                        <h1>Do you want to buy?</h1>
                                        <div className="mt-5">
                                            <Link href="tel:+14049884505" className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                                                Call us today</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    )
}
