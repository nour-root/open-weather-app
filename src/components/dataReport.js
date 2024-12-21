import getImage from "../helper/getImage";

const dataResponse = (
	icon,
	temperature,
	weatherType,
	location,
	feelsLike,
	humidity
) => {
	return `
<div class="w-full my-5 bg-white rounded-md">
  <div
    class="border-b-[1px] border-slate-400 p-5 flex items-center gap-3"
  >
    <button id="return">
      <img src="/assets/arrow-left.svg" class="w-[25px]" alt="" />
    </button>
    <h2 class="text-xl text-sky-blue font-bold">Weather App</h2>
  </div>
  <div class="p-5 py-8 flex flex-col gap-2">
    <img src="/assets/${getImage(
			icon
		)}.png" class="w-[120px]  mx-auto" alt="" />
    <div class="flex flex-col items-center gap-[1.5px]">
      <h3 class="text-4xl font-semibold">${temperature}°C</h3>
      <p class="text-xl font-medium">${weatherType}</p>
      <p class="text-lg font-medium">
        <div class="flex gap-1">
          <img src="/assets/location.svg" class="w-[20px]" alt="" />
          <span class="text-lg font-medium">${location}</span>
        </div>
      </p>
    </div>
  </div>
  <div class="border-t-[1px] border-t-slate-400 flex">
    <div
      class="flex-1 flex items-center justify-center py-4 border-r-[1px] border-r-slate-400"
    >
      <img src="/assets/temperature.svg" class="w-[40px]" alt="" />
      <div class="flex flex-col ml-2">
        <div class="font-semibold text-xl">${feelsLike}°C</div>
        <span class="text-sm font-semibold">Feels Like</span>
      </div>
    </div>
    <div class="flex-1 flex items-center justify-center py-4">
      <img src="/assets/humidity.svg" class="w-[40px]" alt="" />
      <div class="flex flex-col ml-2">
        <div class="font-semibold text-xl">${humidity}%</div>
        <span class="text-sm font-semibold">Humidity</span>
      </div>
    </div>
  </div>
</div>
`;
};

export default dataResponse;
