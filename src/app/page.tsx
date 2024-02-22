import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="carousel rounded-box overflow-hidden pt-6">
        <div className="carousel-inner flex">
          <div className="carousel-item">
            <div className="item-center">
              <img src="/img/Frame 560.png" alt="Burger" className="carousel-image" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-6">
        <div>
          <h2 className="text-2xl text-black font-bold text-left pt-6 pb-3">Flash Sales</h2>
        </div>
        <div className="flex justify-end">
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-2xl">
                <span></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-2xl">
                <span></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-2xl">
                <span></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-2xl">
                <span></span>
              </span>
              sec
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 flex flex-wrap justify-between">
        <div className="card w-96 bg-base-100 shadow-xl mb-4">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">$400</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-4">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">$400</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl mb-4">
          <figure>
            <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">$400</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
