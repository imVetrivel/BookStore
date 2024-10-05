import React from 'react'

const ProductCard = ({ title, description, price, imageUrl }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-slate-600 ring-opacity-40 max-w-60">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                SALE
            </div>
        </div>
        <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <span className="font-bold text-lg">${price}</span>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded text-sm">
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
)

const Home = () => {
    return (
    <div
  id="carouselDarkVariant"
  class="relative"
  data-twe-carousel-init
  data-twe-ride="carousel">
  <div
    class="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
    data-twe-carousel-indicators>
    <button
      data-twe-target="#carouselDarkVariant"
      data-twe-slide-to="0"
      data-twe-carousel-active
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      aria-current="true"
      aria-label="Slide 1"></button>
    <button
      data-twe-target="#carouselDarkVariant"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-twe-slide-to="1"
      aria-label="Slide 1"></button>
    <button
      data-twe-target="#carouselDarkVariant"
      class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
      data-twe-slide-to="2"
      aria-label="Slide 1"></button>
  </div>


  <div
    class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">

    <div
      class="relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-fade
      data-twe-carousel-item
      data-twe-carousel-active>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        class="block w-full"
        alt="Motorbike Smoke" />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl">First slide label</h5>
        <p>
          Some representative placeholder content for the first slide.
        </p>
      </div>
    </div>
    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-fade
      data-twe-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(35).webp"
        class="block w-full"
        alt="Mountaintop" />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl">Second slide label</h5>
        <p>
          Some representative placeholder content for the second slide.
        </p>
      </div>

    <div
      class="relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-fade
      data-twe-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(40).webp"
        class="block w-full"
        alt="Woman Reading a Book" />
      <div
        class="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-black md:block">
        <h5 class="text-xl">Third slide label</h5>
        <p>
          Some representative placeholder content for the third slide.
        </p>
      </div>
    </div>
  </div>

  <button
    class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselDarkVariant"
    data-twe-slide="prev">
    <span class="inline-block h-8 w-8 dark:grayscale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Previous</span
    >
  </button>
  <button
    class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
    type="button"
    data-twe-target="#carouselDarkVariant"
    data-twe-slide="next">
    <span class="inline-block h-8 w-8 dark:grayscale">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </span>
    <span
      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
      >Next</span
    >
  </button>
</div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Fiction</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-8">
        <ProductCard
          title="The Great Gatsby"
          description="A classic novel by F. Scott Fitzgerald, set in the Jazz Age on Long Island."
          price="14.99"
          imageUrl="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6 pt-14">Non-Fiction</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-8">
        <ProductCard
          title="The Great Gatsby"
          description="A classic novel by F. Scott Fitzgerald, set in the Jazz Age on Long Island."
          price="14.99"
          imageUrl="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
      </div>
      <h1 className="text-3xl font-bold mb-6 pt-14">Non-Fiction</h1>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-8">
        <ProductCard
          title="The Great Gatsby"
          description="A classic novel by F. Scott Fitzgerald, set in the Jazz Age on Long Island."
          price="14.99"
          imageUrl="https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
        <ProductCard
          title="To Kill a Mockingbird"
          description="Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South."
          price="12.99"
          imageUrl="https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
        />
      </div>
      
    </div>
    </div>
    )
}

export default Home