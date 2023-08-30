/* eslint-disable @next/next/no-img-element */
import minerals from "@/data/products";
import Head from "next/head";
import Link from "next/link";


export default function Ellaei() {


  const links = [
    {
      title: "Phone Number",
      value: "+1 (404) 988-4505",
      href: "tel:+14049884505"
    },
    {
      title: "Email",
      value: 'Mike@t1factory.com',
      href: 'mailto:Mike@t1factory.com'
    },
    {
      title: "Address",
      value: "Atlanta, Georgia, United States",
      href: "https://goo.gl/maps/teNea3cfLmy8rNuN8"
    }
  ]

  return (
    <>
      <Head>
        <title>Tech 1 Factory</title>
        <meta name="description" content="Transforming Futures Through Innovation and Tech Excellence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="pt-10">
        <div className="flex h-full justify-center items-center flex-col">
          <div className="w-full h-full bg-[url('/bg1.avif')] bg-cover bg-center">
            <div className="w-full h-full min-h-[300px] md:min-h-[500px] flex justify-center items-center backdrop-brightness-50">
              <div className="text-center p-5">
                <h1 className="text-gray-100 py-3 md:py-5 text-4xl md:text-7xl font-extrabold">
                  Innovate. Elevate. Unleash
                </h1>
                <h2 className="py-3 md:py-5 text-white font-bold text-2xl md:text-3xl">
                  Transforming Futures Through Innovation and Tech Excellence
                </h2>
                <h3 className="text-white py-2 text-xl md:text-4xl">24/7 service</h3>
                <div className="flex justify-center mt-5">
                  <Link href="tel:+14049884505" className="text-white bg-blue-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5 mr-2 mb-2  focus:outline-none ">
                    Reach us today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="bg-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-6xl mx-auto">
              <h1 className="p-5 md:p-10 text-center text-xl md:text-6xl font-bold">
                We craft premier software products, offering exceptional services with speed, reliability, and scalability.
              </h1>
            </div>
            <div className="pt-6 px-5 md:px-0">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {minerals.map((x: any, i: number) => <div key={i}>
                  <Link href="https://calendly.com/techethio/30min" target="_blank">
                    <div key={i}
                      className="shadow-xl rounded cursor-pointer bg-white hover:bg-gray-300"
                    >
                      <div className="max-h-[200px]">
                        <img src={x.picture} alt="" className="max-h-[200px] rounded-t w-full" />
                      </div>
                      <div className="p-5">
                        <p className="font-extrabold pb-2 text-xl md:text-3xl">{x.title} </p>
                        <p>{x!.desc}
                          <span className="text-blue-600 pl-1"
                          >Learn more</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>)}
              </div>
            </div>
            <section>
              <div className="p-5 md:p-10">
                <h1 className="text-center text-2xl md:text-4xl py-6 font-semibold">The ideal solution provider for your business</h1>
                <div className="py-2 md:flex md:space-x-10">
                  <div className="h-full">
                  <p className="pb-10">
                    We are working hard to solves problems in Africa
                    We are a team of experienced professionals. We are growing. After several years of hard work and experienc in some of the high tech companies we recognized that our technical skills, experiences , and our African values ca be put togather to create technologies that will transform lives in Africa.

                    We believe that people are the secret to success. By empowering them, we create value for our customers and positively impact the world.
                  </p>
                  <img src="/team2.png" alt="" className="w-full h-full rounded object-contain" />
                  </div>
                  <div className="h-full">
                    <img src="/team1.png" alt="" className="w-full h-full rounded object-contain" />
                  </div>
                </div>


                <h1 className="py-5 text-center font-extrabold text-2xl md:text-6xl">Contact us</h1>
                <div className="flex justify-center">
                  <ol className="list-disc">
                    {
                      links.map((x, i) => <li key={i} className="py-2">
                        <span className="font-bold">{x.title}</span>:
                        <Link href={x.href} className="text-blue-600 pl-2" target="_blank">{x.value}</Link>
                      </li>)
                    }
                  </ol>
                </div>
              </div>
            </section>

          </div>
        </section>
      </div>
    </>
  )
}
