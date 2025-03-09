export const Hero = () => {
  return (
    <section className="bg-cream pb-9 pt-24 md:pb-12 md:pt-48">
      <h1 className="relative w-full text-center">
        <span className="relative block text-center font-display text-[16vw] font-black leading-trim text-black">
          SHIPA
        </span>

      </h1>
      <div className="w-full justify-center items-center flex h-36">
        <button className="flex h-8   justify-end rounded-full border-2 text-black border-black bg-[#FF521B] px-2 py-2 text-xl font-bold leading-trim drop-shadow-cart transition-colors ease-in md:h-12 md:px-4 md:text-base better-hover:hover:bg-cream">
          <a href="https://github.com/apps/shipa-bot">Instalar</a>
        </button>
      </div>
    </section>
  )
}
