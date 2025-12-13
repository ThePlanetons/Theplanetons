const Work = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-5xl font-semibold">Work</h2>
        <span className="text-3xl">↓</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Big Card */}
    <div
  className="
    md:col-span-2 
    rounded-2xl 
    overflow-hidden 
    relative
    transform transition-all duration-500
    hover:-translate-y-2 hover:shadow-2xl

    h-[280px]        /* mobile */
    sm:h-[360px]     /* small screens */
    md:h-[520px]     /* laptop */
    lg:h-[580px]     /* desktop */
    xl:h-[620px]     /* large desktop */
  "
>
  <a href="https://v11tech.com/"
  target="_blank"
  >
  <img
    src="/img/w-1.jpg"
    alt="Work 1"
    className="
      w-full 
      h-full 
      object-cover 
      transition-transform duration-500 
      hover:scale-105
    "
  />
  </a>

  <div className="absolute top-4 left-4 text-white">
    <h3 className="text-xl font-medium">V11 Tech</h3>
    <p className="text-sm opacity-70"></p>
  </div>
</div>



        {/* Card 2 */}
        {/* <div className="rounded-2xl overflow-hidden relative">
          <img
            src="/assets/work2.jpg"
            alt="Work 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-white">
            <h3 className="text-lg font-medium">Summr</h3>
            <p className="text-sm opacity-70">India</p>
          </div>
        </div> */}

        {/* Card 3 */}
        {/* <div className="rounded-2xl overflow-hidden relative bg-gray-100">
          <img
            src="/assets/work3.jpg"
            alt="Work 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-black">
            <h3 className="text-lg font-medium">BCF</h3>
            <p className="text-sm opacity-60">Cast Factory</p>
          </div>
        </div> */}

        {/* Big Bottom Card */}
        {/* <div className="md:col-span-2 rounded-2xl overflow-hidden relative">
          <img
            src="/assets/work4.jpg"
            alt="Work 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 text-white">
            <h3 className="text-xl font-medium">Zaap</h3>
            <p className="text-sm opacity-70">Energy</p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default Work;
