
type Country = {
  name: {
    common: string
  }
}

async function getCountries(): Promise<Country[]> {
  const response = await fetch("https://restcountries.com/v3.1/all")
  return response.json()
}

export default async function Home() {

  const countries = await getCountries()

  return (
    <section className="grid grid-cols-5 w-full container gap-2 mt-16">

      {countries.map((country) => (
        <article key={country.name.common} className="h-64 min-w-full p-2 bg-white border-2 rounded-xl">
          <h1>{country.name.common}</h1>
        </article>
      ))}

    </section>
  )
}
